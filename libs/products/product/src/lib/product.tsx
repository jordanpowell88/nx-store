import { Product as ProductType } from '@nx-bitovi/types';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './product.module.scss';
import { ProductDetails } from './product-details/product-details';

export const Product = () => {
  const [productDetails, setProductDetails] = useState<ProductType | null>(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProductDetails(data as ProductType));
  }, [id]);

  if (!productDetails) {
    return <div>Loading...</div>;
  }
  return <div className={styles['container']}>
    <h1>{productDetails.title}</h1>
    <p>{productDetails.description}</p>
    <ProductDetails product={productDetails} />
    <img src={productDetails.image} alt={productDetails.title} />
  </div>;
};