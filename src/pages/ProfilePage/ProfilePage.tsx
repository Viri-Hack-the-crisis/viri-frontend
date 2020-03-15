import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { StoreContext } from "../../state/store";

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
    <div>
      <h1>Profile Page placeholder</h1>
    </div>
  );
};

export default ProfilePage;
