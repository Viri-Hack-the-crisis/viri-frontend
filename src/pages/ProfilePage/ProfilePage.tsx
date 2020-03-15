import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { StoreContext } from "../../state/store";

import { ProfileContainer } from "../../components/Profile/Profile.styles";

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
      Here
    </ProfileContainer>
  );
};

export default ProfilePage;
