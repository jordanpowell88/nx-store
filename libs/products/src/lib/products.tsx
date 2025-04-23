import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import styles from './products.module.scss';
import { Product } from '@nx-bitovi/types';
import { ProductThumbnail } from '@nx-bitovi/product';
import { Input } from '@nx-bitovi/components';
export function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data as Product[]));
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
  }, [products, search]);

  return (
    <>
    <h1>Welcome to Products!</h1>
    <div className={styles['search-container']}>
      <Input className={styles['search-input']} type="text" placeholder="Search" value={search} onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
    </div>
    <div className={styles['container']}>
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <ProductThumbnail product={product} key={product.id} />
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
      </>
  );
}

export default Products;
