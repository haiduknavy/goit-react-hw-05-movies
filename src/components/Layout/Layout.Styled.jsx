import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #253334;
  padding: 15px 40px;
`;

export const Link = styled(NavLink)`
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  color: antiquewhite;
  &.active {
    color: rgba(100, 69, 212, 0.726);
  }
  text-decoration: none;

  :not(:last-child) {
    margin-right: 30px;
  }
`;