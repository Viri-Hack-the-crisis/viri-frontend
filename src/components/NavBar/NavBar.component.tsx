import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";

import { NavBarContainer } from "./NavBar.styles";

import { StoreContext } from "../../state/store";

interface Props {}

const NavBar: React.FC<Props> = () => {
  const { userLoggedIn, setUserLoggedIn } = useContext(StoreContext);

  const handleLogin = () => {
    setUserLoggedIn(!userLoggedIn);
  };

  return (
    <div>
      {!userLoggedIn ? <Redirect to="/" /> : <Redirect to="/map" />}
      {!userLoggedIn ? (
        <NavBarContainer>
          <Link to="/">VIRI</Link>
          <Link to="/howthisworks">HOW THIS WORKS</Link>
          <div onClick={handleLogin}>SIGN IN</div>
        </NavBarContainer>
      ) : (
        <NavBarContainer>
          <Link to="/map">VIRI</Link>
          <Link to="/selfreport">SELF-CHECK</Link>
          <Link to="/profile">PROFILE</Link>
          <div onClick={handleLogin}>SIGN OUT</div>
        </NavBarContainer>
      )}
    </div>
  );
};

export default NavBar;
