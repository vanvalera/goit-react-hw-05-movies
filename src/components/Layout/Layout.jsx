import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/" end="true">
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
