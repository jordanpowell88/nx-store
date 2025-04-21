import { useMemo } from 'react';
import styles from './checkout.module.scss';
import { Item } from '@nx-bitovi/item';
import { useCart } from '@nx-bitovi/cart-context';
import { formatPrice } from '@nx-bitovi/utils';
export function Checkout() {
  const { items, clearCart } = useCart();

  const total = useMemo(() => items.reduce((acc, item) => acc + item.price, 0), [items]);

  return (
    <div className={styles['container']}>
      <h1>Cart</h1> 
      {items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className={styles['cartItems']}>
          {items.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </div>
      )}
      <div className={styles['totalContainer']}>
        {items.length > 0 && <button onClick={() => clearCart()}>Clear Cart</button>}
        <p className={styles['total']}>Total: {formatPrice(total)}</p>
      </div>
    </div>
  );
}

export default Checkout;
  