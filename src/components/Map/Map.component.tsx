import React from "react";
import { Map as LeafletMap, TileLayer, ZoomControl } from "react-leaflet";
// @ts-ignore
import HeatmapLayer from "react-leaflet-heatmap-layer";

import "leaflet/dist/leaflet.css";
import "./Map.css";

import { addressPoints } from "../../utilities/addressPoints";

interface Props {}

const Map: React.FC<Props> = props => {
  return (
    <LeafletMap
      center={[59.43708, 24.745272]}
      style={{ width: "100%", height: "94vh" }}
      maxZoom={19}
      zoom={12}
      zoomControl={false}
    >
      <HeatmapLayer
        fitBoundsOnLoad
        fitBoundsOnUpdate
        points={addressPoints}
        longitudeExtractor={(m: any) => m[1]}
        latitudeExtractor={(m: any) => m[0]}
        intensityExtractor={(m: any) => parseFloat(m[2])}
      />
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomright" />
    </LeafletMap>
  );
};

export default Map;
