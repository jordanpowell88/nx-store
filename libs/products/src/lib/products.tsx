import { useEffect, useState } from 'react';
import styles from './products.module.scss';
import { Product } from '@nx-bitovi/types';
import { ProductThumbnail } from '@nx-bitovi/product';
import { Link } from 'react-router-dom';

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data as Product[]));
  }, []);

  return (
    <>
    <h1>Welcome to Products!</h1>
    
    <div className={styles['container']}>
      {products.map(product => (
        <Link to={`/products/${product.id}`} key={product.id}>
          <ProductThumbnail product={product} />
        </Link>
      ))}
    </div>
      </>
  );
}

export default Products;
