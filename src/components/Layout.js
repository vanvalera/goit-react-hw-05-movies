import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
const Layout = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dogs">Colection</NavLink>
        </li>
      </ul>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
export default Layout;
