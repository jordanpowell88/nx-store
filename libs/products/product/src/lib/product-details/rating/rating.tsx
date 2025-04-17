import { Product } from "@nx-bitovi/types";
import styles from './rating.module.scss';
export const Rating: React.FC<{ rating: Product['rating'] }> = ({ rating }) => {
  return (
    <div className={styles['rating-container']}>
        <div className={styles['rating-stars']}>
          {[...Array(5)].map((_, index) => (
            <span key={index}>
              {index < Math.round(rating.rate) ? '★' : '☆'}
            </span>
          ))}
        </div>
        <span className={styles['rating-count']}>{rating.count} reviews</span>
      </div>
  );
};