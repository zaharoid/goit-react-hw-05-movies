import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Spinner } from '../Loader/Loader';
import { Header, Container, NavList } from './Layout.styled';
import styled from '@emotion/styled';

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: 7px 15px;
  background-color: #4963c4;
  border-radius: 10px;
  transition: all 250ms linear;
  &:hover {
    background-color: #1a2b68;
  }
`;

function Layout() {
  return (
    <main>
      <Header>
        <nav>
          <NavList>
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/movies'}>Movies</NavLink>
            </li>
          </NavList>
        </nav>
      </Header>
      <Container>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
}

export default Layout;
