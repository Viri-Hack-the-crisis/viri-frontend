import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";

import { HeaderContainer } from "./NavBar.styles";
import { HeaderLinks } from "./NavBar.styles";
import { HeaderMenu } from "./NavBar.styles";

import { StoreContext } from "../../state/store";

import LogoViri from '../../images/logoViri.svg';

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
          <HeaderLinks>
            <div>
              <Link to="/"><img src={LogoViri} alt="Viri logo" /></Link>
            </div>
            <HeaderMenu>
              <div><Link to="/howthisworks">HOW THIS WORKS</Link></div>
              <div onClick={handleLogin}>SIGN IN</div>
            </HeaderMenu>
          </HeaderLinks>
        </HeaderContainer>
      ) : (
        <HeaderContainer>
          <HeaderLinks>
            <div>
              <Link to="/"><img src={LogoViri} alt="Viri logo" /></Link>
            </div>
            <HeaderMenu>
              <Link to="/selfreport">SELF-CHECK</Link>
              <Link to="/profile">PROFILE</Link>
              <div onClick={handleLogin}>SIGN OUT</div>
            </HeaderMenu>
          </HeaderLinks>
        </HeaderContainer>
      )}
    </div>
  );
};

export default NavBar;
