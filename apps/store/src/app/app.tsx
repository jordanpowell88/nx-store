// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import { Products } from '@nx-bitovi/products';
import { Product } from '@nx-bitovi/product';
import { Route, Routes, Link } from 'react-router-dom';
import NxWelcome from './nx-welcome';
import styles from './app.module.scss';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.container}>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
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
      </Routes>
  );
}

export default App;
