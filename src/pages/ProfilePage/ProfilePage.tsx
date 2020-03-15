import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { StoreContext } from "../../state/store";

import { ProfileContainer } from "../../components/Profile/Profile.styles";
import { H1 } from "../../components/Profile/Profile.styles";
import { H2 } from "../../components/Profile/Profile.styles";
import { ProfileText, ProfileInfo, ProfileTopic, ProfileFackts, ProfileButtonYellow, ProfileButtonGreen } from "../../components/Profile/Profile.styles";

interface Props {}

const ProfilePage = (props: Props) => {
  const { userLoggedIn } = useContext(StoreContext);
  const history = useHistory();

  useEffect(() => {
    if (!userLoggedIn) {
      history.replace("/");
    }
  }, [history, userLoggedIn]);

  return (
    <ProfileContainer>
      <div>
        <div>
          <H1>Your Profile</H1>
          <ProfileInfo>
            <ProfileTopic>
              <ProfileText>Name</ProfileText>
              <ProfileText>Gender</ProfileText>
              <ProfileText>Date of Birth</ProfileText>
              <ProfileText>Country of Residency</ProfileText>
              <ProfileText>Place of Birth</ProfileText>
            </ProfileTopic>
            <ProfileFackts>
              <ProfileText>Klaabu Gonzales</ProfileText>
              <ProfileText>Male</ProfileText>
              <ProfileText>08/02/1982</ProfileText>
              <ProfileText>Estonia</ProfileText>
              <ProfileText>United States of Grigoristan</ProfileText>
            </ProfileFackts>
          </ProfileInfo>
        </div>
        <div>
          <H1>Your Self-checks</H1>
          <ProfileInfo>
            <ProfileTopic>
              <H2>Date</H2>
              <ProfileText>12.03.2020</ProfileText>
              <ProfileText>09.03.2020</ProfileText>
              <ProfileText>02.03.2020</ProfileText>
            </ProfileTopic>
            <ProfileFackts>
              <H2>Result</H2>
              <ProfileButtonGreen>High Risk </ProfileButtonGreen>
              <ProfileButtonYellow>Moderate Risk</ProfileButtonYellow>
              <ProfileButtonYellow>Moderate Risk</ProfileButtonYellow>
            </ProfileFackts>
          </ProfileInfo>
        </div>
      </div>
    </ProfileContainer>
  );
};

export default ProfilePage;
