import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header,Link } from './Layout.Styled';

function Layout() {
  return (
    <Header>
      <nav>
        <Link  to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </Header>
  );
}

export default Layout;
