import React, { useContext } from "react";
/* import { Link, Redirect } from "react-router-dom"; */

import {
  CheckYourselfContainer,
  LocationAndInfectionsContainer,
  SelectedAreaContainer,
  SideBarContainer,
  SideBarButton
} from "./SideBar.styles";

import { StoreContext } from "../../state/store";

interface Props {}

const NavBar: React.FC<Props> = () => {
  const { confirmedInfected } = useContext(StoreContext);

  return (
    <SideBarContainer>
      <LocationAndInfectionsContainer>
        <SelectedAreaContainer>
          <b>Selected Area</b>
          <p>Estonia Harjumaa Tallinn Kristiine</p>
        </SelectedAreaContainer>

        <div>
          <b>Confirmed Infected Cases:</b>
          <p>{confirmedInfected}</p>
        </div>

        <div>
          <b>Self-Reported Cases:</b>
          <p>218</p>
        </div>

        <div>
          <b>Contacts With Infected People:</b>
          <p>1 time(s)</p>
        </div>
      </LocationAndInfectionsContainer>

      <CheckYourselfContainer>
        <p>Feeling unwell? Check your risk status:</p>
        <SideBarButton>Check Yourself</SideBarButton>
      </CheckYourselfContainer>
    </SideBarContainer>
  );
};

export default NavBar;
