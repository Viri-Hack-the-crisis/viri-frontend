import React from "react";
import { Link } from "react-router-dom";

import { HeaderContainer } from "./Header.styles";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <div>
      <HeaderContainer>
        <Link to="/">Front Page</Link>

        <Link to="/map">Map Page</Link>

        <Link to="/selfreport">Self Report Page</Link>
      </HeaderContainer>
    </div>
  );
};

export default Header;
