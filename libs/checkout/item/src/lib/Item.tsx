import { Product } from '@nx-bitovi/types';
import styles from './Item.module.scss';
import { useCart } from '@nx-bitovi/cart-context';
import { truncate, formatPrice } from '@nx-bitovi/utils';
import { Button } from '@nx-bitovi/components';

export const Item: React.FC<Product> = ({ id, title, price, image }) => {
  const { removeItem } = useCart();

  return (
    <div className={styles['container']}>
      <img src={image} alt={title} width={100} height={100} />
      <h3>{truncate(title)}</h3>
      <div className={styles['priceContainer']}>
        <Button className={styles['removeButton']} onClick={() => removeItem(id)}>X</Button>
        <p>{formatPrice(price)}</p>
      </div>
    </div>
  );
}

export default Item;
