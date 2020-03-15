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
      {/* Do not modify the line below, it is used as a workaround for nasty Leaflet bug! */}
      {userLoggedIn ? <Map /> : null}
      <SideBar />
    </div>
  );
};

export default MapPage;
