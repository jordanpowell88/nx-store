import { Product } from "@nx-bitovi/types";
import { Rating } from "./rating/rating";
import styles from './product-details.module.scss';

export const ProductDetails: React.FC<{ product: Pick<Product, 'rating' | 'price'> }> = ({ product }) => {
  return (
    <div className={styles['product-details']}>
      <p className={styles['price']}>${product.price}</p>
      <Rating rating={product.rating} />
    </div>
  );
};