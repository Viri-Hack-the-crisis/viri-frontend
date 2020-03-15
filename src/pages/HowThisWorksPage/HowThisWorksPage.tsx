import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { StoreContext } from "../../state/store";

interface Props {}

const HowThisWorksPage = (props: Props) => {
  const { userLoggedIn } = useContext(StoreContext);
  const history = useHistory();

  useEffect(() => {
    if (userLoggedIn) {
      history.replace("/map");
    }
  }, [history, userLoggedIn]);

  return (
    <div>
      <h1>How This Works Placeholder</h1>
    </div>
  );
};

export default HowThisWorksPage;
