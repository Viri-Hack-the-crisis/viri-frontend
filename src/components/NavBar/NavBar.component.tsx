import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";

import { HeaderContainer } from "./NavBar.styles";

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
        <HeaderContainer>
          <Link to="/">VIRI</Link>
          <Link to="/howthisworks">HOW THIS WORKS</Link>
          <div onClick={handleLogin}>SIGN IN</div>
        </HeaderContainer>
      ) : (
        <HeaderContainer>
          <Link to="/map">VIRI</Link>
          <Link to="/selfreport">SELF-CHECK</Link>
          <Link to="/profile">PROFILE</Link>
          <div onClick={handleLogin}>SIGN OUT</div>
        </HeaderContainer>
      )}
    </div>
  );
};

export default NavBar;
