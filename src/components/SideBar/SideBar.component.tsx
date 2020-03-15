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
          <p>New Zealand Waikato Region Cambridge</p>
        </SelectedAreaContainer>

        <div>
          <b>Confirmed Infected Cases:</b>
          <p>{confirmedInfected}</p>
        </div>

        <div>
          <b>Self-Reported Cases:</b>
          <p>
            {confirmedInfected * Math.floor(Math.random() * (10 - 0 + 1)) + 0}
          </p>
        </div>

        <div>
          <b>Close Contacts With Infections:</b>
          <p>{Math.floor(Math.random() * (24 - 0 + 1)) + 0} time(s)</p>
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
