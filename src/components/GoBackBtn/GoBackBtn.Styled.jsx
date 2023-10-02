import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Search = styled(NavLink)`
  text-decoration: none;
  padding: 14px;
  border: 6px solid grey;
  border-radius: 20px;
  background-color: #253334;
  color: antiquewhite;
  :hover {
    background-color: #2196f3;
    transition: all 1s linear 0s;
  }
`;

export const BtnWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
`;