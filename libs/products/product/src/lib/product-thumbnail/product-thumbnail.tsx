import styles from './product-thumbnail.module.scss';
import { Product } from '@nx-bitovi/types';
import { ProductDetails } from '../product-details/product-details';
import { truncate } from '@nx-bitovi/utils';
import { Link } from 'react-router-dom';
import { Card } from '@nx-bitovi/components';
export const ProductThumbnail: React.FC<{ product: Product }> = ({ product }) => {

  return (
    <Card data-testid="product-thumbnail" className={styles['container']}>
      <Link to={`/products/${product.id}`}>
        <h3>{truncate(product.title)}</h3>
        <p className={styles['description']}>{truncate(product.description, 100)}</p>
        <img src={product.image} alt={product.title} width={125} height={125} />
        <ProductDetails product={product} />
      </Link>
    </Card>
  );
}

export default ProductThumbnail;
