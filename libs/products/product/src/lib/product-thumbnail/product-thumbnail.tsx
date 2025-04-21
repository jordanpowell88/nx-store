import styles from './product-thumbnail.module.scss';
import { Product } from '@nx-bitovi/types';
import { ProductDetails } from '../product-details/product-details';
import { truncate } from '@nx-bitovi/utils';
export const ProductThumbnail: React.FC<{ product: Product }> = ({ product }) => {

  return (
    <div className={styles['container']}>
      <h3>{truncate(product.title)}</h3>
      <p className={styles['description']}>{truncate(product.description, 100)}</p>
      <img src={product.image} alt={product.title} width={125} height={125} />
      <ProductDetails product={product} />
    </div>
  );
}

export default ProductThumbnail;
