import React, { useState, useContext } from "react";
import {
  Map as LeafletMap,
  Circle,
  TileLayer,
  ZoomControl
} from "react-leaflet";

import HeatmapLayer from "react-leaflet-heatmap-layer";
import { LeafletMouseEvent, LatLngTuple } from "leaflet";

import "leaflet/dist/leaflet.css";
import "./Map.css";

import { StoreContext } from "../../state/store";
import { addressPoints } from "../../utilities/addressPoints";

interface Props {}

const Map: React.FC<Props> = props => {
  const [searchCirclePosition, setSearchCirclePosition] = useState<
    number[] | null
  >([]);

  const { setConfirmedInfected } = useContext(StoreContext);

  // Clickable circle radius on map in meters
  const searchRadius = 500;

  const handleClick = (event: LeafletMouseEvent): void => {
    const coords = event.latlng;
    setSearchCirclePosition([coords.lat, coords.lng]);

    setConfirmedInfected(
      addressPoints.filter(
        (item: any) => coords.distanceTo([item[0], item[1]]) <= searchRadius
      ).length
    );
  };

  return (
    <LeafletMap
      center={[59.43708, 24.745272]}
      maxZoom={19}
      style={{ width: "100%", height: "94vh" }}
      zoom={12}
      zoomControl={false}
      onClick={handleClick}
    >
      <HeatmapLayer
        //Next 2 props focus the map on heatmap data
        fitBoundsOnLoad
        /* fitBoundsOnUpdate */
        // Entry point for heatmap data
        points={addressPoints}
        latitudeExtractor={(m: any) => m[0]}
        longitudeExtractor={(m: any) => m[1]}
        intensityExtractor={(m: any) => parseFloat(m[2])}
      />
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {searchCirclePosition?.length ? (
        <Circle
          center={searchCirclePosition as LatLngTuple}
          color="#F45B4F"
          fillColor="#F8DB57"
          fillOpacity={0.4}
          radius={searchRadius}
        ></Circle>
      ) : null}
      <ZoomControl position="bottomright" />
    </LeafletMap>
  );
};

export default Map;
