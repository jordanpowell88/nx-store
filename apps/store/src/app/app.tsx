// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import { Products } from '@nx-bitovi/products';
import { Product } from '@nx-bitovi/product';
import { Route, Routes, Link } from 'react-router-dom';
import NxWelcome from './nx-welcome';
import styles from './app.module.scss';
import { Checkout } from '@nx-bitovi/checkout';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.container}>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/checkout"><span role="img" aria-label="cart">🛒</span></Link></li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export function App() {
  return (
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
  );
}

export default App;
