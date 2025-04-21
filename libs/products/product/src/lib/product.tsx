import { Product as ProductType } from '@nx-bitovi/types';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './product.module.scss';
import { ProductDetails } from './product-details/product-details';
import { useCart } from '@nx-bitovi/cart-context';

export const Product = () => {
  const [productDetails, setProductDetails] = useState<ProductType | null>(
    null
  );
  const { id } = useParams();
  const { addItem } = useCart();
  const [message, setMessage] = useState('');

  const handleAddToCart = () => {
    if (productDetails) {
      addItem(productDetails);
      setMessage('Added to Cart');
    }
  };

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  }, [message]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDetails(data as ProductType));
  }, [id]);

  if (!productDetails) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles['container']}>
      <h1>{productDetails.title}</h1>
      <p>{productDetails.description}</p>
      <ProductDetails product={productDetails} />
      <img src={productDetails.image} alt={productDetails.title} />
      {message ? (
        <p className={styles['message']}>{message}</p>
      ) : (
        <button onClick={handleAddToCart}>
          Add to Cart{' '}
          <span role="img" aria-label="cart">
            🛒
          </span>
        </button>
      )}
    </div>
  );
};
