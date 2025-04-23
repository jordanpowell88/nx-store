// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import { Products } from '@nx-bitovi/products';
import { Product } from '@nx-bitovi/product';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import NxWelcome from './nx-welcome';
import styles from './app.module.scss';
import { Checkout } from '@nx-bitovi/checkout';
import { CartProvider } from '@nx-bitovi/cart-context';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname === path;

  return (
    <div className={styles.container}>
      <nav>
        <ul>
          <li><Link to="/" className={isActive('/') ? styles.active : ''}>Home</Link></li>
          <li><Link to="/products" className={isActive('/products') ? styles.active : ''}>Products</Link></li>
          <li><Link to="/checkout" className={isActive('/checkout') ? styles.active : ''}><span role="img" aria-label="cart">🛒</span></Link></li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export function App() {
  return (
    <CartProvider>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <NxWelcome title="store" />
            </Layout>
          }
          />
        <Route path="/products">
          <Route
            index
            element={
              <Layout>
                <Products />
              </Layout>
            }
            />
          <Route
            path=":id"
            element={
              <Layout>
                <Product />
              </Layout>
            }
            />
        </Route>
        <Route
          path="/checkout"
          element={
            <Layout>
              <Checkout />
            </Layout>
          }
          />

      </Routes>
    </CartProvider>
  );
}

export default App;
