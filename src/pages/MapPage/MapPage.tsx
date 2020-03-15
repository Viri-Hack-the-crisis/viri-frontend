import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import Map from "../../components/Map/Map.component";
import SideBar from "../../components/SideBar/SideBar.component";

import { StoreContext } from "../../state/store";

interface Props {}

const MapPage = (props: Props) => {
  const { userLoggedIn } = useContext(StoreContext);
  const history = useHistory();

  useEffect(() => {
    if (!userLoggedIn) {
      history.replace("/");
    }
  }, [history, userLoggedIn]);

  return (
    <div>
      <Map />
      <SideBar />
    </div>
  );
};

export default MapPage;
