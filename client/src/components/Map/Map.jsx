import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import "./Map.css";
import { Box } from "@mui/system";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5pa2V0MDkyMCIsImEiOiJja3MwazhpbGgxa3Q2Mm5xajFkbmt0ODhiIn0.VFl6j_3sd6zWE54_v3f14A";

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [80.0465, 12.8219],
      zoom: 14.2,
    });

    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
      })
    );

    return () => map.remove();
  }, []);

  return (
    <Box
      //sx={{ height: "60vh" }}
      className="map-container"
      ref={mapContainerRef}
    />
  );
};

export default Map;
