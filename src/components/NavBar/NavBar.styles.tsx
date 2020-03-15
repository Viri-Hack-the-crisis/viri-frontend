import styled from "styled-components";

export const NavBarContainer = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  padding: 0 2rem;
  height: 92px;
  display: flex;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Raleway;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  /* position: fixed; */
  z-index: 99999;
`;

export const HeaderLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1440px;
  margin: auto;
`;

export const SignInOutContainer = styled.div`
  cursor: pointer;
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  color: #000000;
  text-decoration: none;
`;