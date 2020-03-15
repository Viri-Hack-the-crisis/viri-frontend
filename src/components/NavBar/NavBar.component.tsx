import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { NavBarContainer, SignInOutContainer, NavBarMenu, MenuList } from "./NavBar.styles";

import { StoreContext } from "../../state/store";

import LogoViri from '../../images/logoViri.svg';

interface Props {}

const NavBar: React.FC<Props> = () => {
  const { userLoggedIn, setUserLoggedIn } = useContext(StoreContext);

  const handleLogin = () => {
    setUserLoggedIn(true);
  };

  const handleLogout = () => {
    setUserLoggedIn(false);
  };

  return (
    <div>
      {!userLoggedIn ? (
        <NavBarContainer>
          <NavBarMenu>
            <div>
              <Link to="/"><img src={LogoViri} alt="Logo" /></Link>
            </div>
            <MenuList>
              <Link style={{ textDecoration: 'none', color: '#346EA6', padding: '23px' }} to="/howthisworks">HOW THIS WORKS</Link>
              <SignInOutContainer onClick={handleLogin}>SIGN IN</SignInOutContainer>
            </MenuList>
          </NavBarMenu>
        </NavBarContainer>
      ) : (
        <NavBarContainer>
          <NavBarMenu>
            <div>
              <Link to="/map"><img src={LogoViri} alt="Logo" /></Link>
            </div>
            <MenuList>
              <Link style={{ textDecoration: 'none', color: '#346EA6', padding: '23px' }} to="/selfreport">SELF-CHECK</Link>
              <Link style={{ textDecoration: 'none', color: '#346EA6', padding: '23px' }} to="/profile">PROFILE</Link>
              <SignInOutContainer onClick={handleLogout}>
                SIGN OUT
              </SignInOutContainer>
            </MenuList>
          </NavBarMenu>
        </NavBarContainer>
      )}
    </div>
  );
};

export default NavBar;
