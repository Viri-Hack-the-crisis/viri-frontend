import { HeroContainer } from "../../components/Hero/Hero.styles";
import { HeroLeft } from "../../components/Hero/Hero.styles";
import { HeroRight } from "../../components/Hero/Hero.styles";
import { HeroPic } from "../../components/Hero/Hero.styles";
import { H1 } from "../../components/Hero/Hero.styles";
import { H2 } from "../../components/Hero/Hero.styles";
import { ButtonAction } from "../../components/Hero/Hero.styles";
import { HeroText } from "../../components/Hero/Hero.styles";

import HeroImage from '../../images/hero_image.svg';
import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { StoreContext } from "../../state/store";
import { Script } from "vm";

interface Props {}

const FrontPage = (props: Props) => {
  const { userLoggedIn } = useContext(StoreContext);
  const history = useHistory();

  useEffect(() => {
    if (userLoggedIn) {
      history.replace("/map");
    }
  }, [history, userLoggedIn]);

  return (
      <HeroContainer>
        <HeroLeft>
          <H1>VIRI</H1>
          <H2>Your virus awareness companion</H2>
          <HeroText>Become aware of local virus infection interactions, your own status and help others to do the same.</HeroText>
          <ButtonAction>Get Started</ButtonAction>
        </HeroLeft>
        <HeroRight>
          <HeroPic>
            <img src={HeroImage} alt="Hero" />
          </HeroPic>
        </HeroRight>
      </HeroContainer>
  );
};

export default FrontPage;
