import styled from "styled-components";

export const NavBarContainer = styled.div`
  color: #FFFCF9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 92px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  width: 100%;
  /* position: fixed; */
  z-index: 99999;
`;

export const NavBarMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1440px;
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #346EA6;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  text-decoration: none;
`;

export const Link = styled.link`
  margin-right: 16px;
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
`;
