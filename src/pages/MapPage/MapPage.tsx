import React from "react";

import Map from "../../components/Map/Map.component";
import SideBar from "../../components/SideBar/SideBar.component";

interface Props {}

const MapPage = (props: Props) => {
  return (
    <div>
      <Map />
      <SideBar />
    </div>
  );
};

export default MapPage;
