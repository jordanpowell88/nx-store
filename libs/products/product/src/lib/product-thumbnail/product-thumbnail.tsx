import styles from './product-thumbnail.module.scss';
import { Product } from '@nx-bitovi/types';
import { ProductDetails } from '../product-details/product-details';

export const ProductThumbnail: React.FC<{ product: Product }> = ({ product }) => {
  const truncateDescription = (text: string, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
  };

  return (
    <div className={styles['container']}>
      <h3>{product.title}</h3>
      <p className={styles['description']}>{truncateDescription(product.description)}</p>
      <img src={product.image} alt={product.title} width={125} height={125} />
      <ProductDetails product={product} />
    </div>
  );
}

export default ProductThumbnail;
