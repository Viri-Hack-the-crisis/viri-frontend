import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { NavBarContainer, SignInOutContainer } from "./NavBar.styles";

import { StoreContext } from "../../state/store";

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
          <Link to="/">VIRI</Link>
          <Link to="/howthisworks">HOW THIS WORKS</Link>
          <SignInOutContainer onClick={handleLogin}>SIGN IN</SignInOutContainer>
        </NavBarContainer>
      ) : (
        <NavBarContainer>
          <Link to="/map">VIRI</Link>
          <Link to="/selfreport">SELF-CHECK</Link>
          <Link to="/profile">PROFILE</Link>
          <SignInOutContainer onClick={handleLogout}>
            SIGN OUT
          </SignInOutContainer>
        </NavBarContainer>
      )}
    </div>
  );
};

export default NavBar;
