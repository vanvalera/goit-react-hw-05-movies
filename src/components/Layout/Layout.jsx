import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import css from './Layout.module.css';
export const Layout = () => {
  return (
    <div>
      <header>
        <nav className={css.nav_layout}>
          <Link to="/" end="true" className={css.link_home}>
            Home
          </Link>
          <Link to="/movies" className={css.link_movies}>
            Movies
          </Link>
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
