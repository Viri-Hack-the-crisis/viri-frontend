import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { StoreContext } from "../../state/store";

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
    <div>
      <h1>Front Page placeholder</h1>
    </div>
  );
};

export default FrontPage;
