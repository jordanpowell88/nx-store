import { Product } from "@nx-bitovi/types";
import { Rating } from "./rating/rating";
import styles from './product-details.module.scss';
import { formatPrice } from "@nx-bitovi/utils";

export const ProductDetails: React.FC<{ product: Pick<Product, 'rating' | 'price'> }> = ({ product }) => {
  return (
    <div className={styles['product-details']}>
      <p className={styles['price']}>{formatPrice(product.price)}</p>
      <Rating rating={product.rating} />
    </div>
  );
};