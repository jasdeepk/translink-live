// src/components/Map.tsx

import * as React from 'react';
import * as MapGl from 'react-map-gl'
import './Map.css'

const MAPBOX_TOKEN = 'pk.eyJ1IjoiamFzZGVlcGsiLCJhIjoiY2pnMzVyMGprMXoxMzJ4bnk5d2k2anFiYSJ9.YZhsNX2-Chp9N95Au0DIhw';

export interface IViewport {
  height:number;
  latitude:number;
  longitude:number;
  width:number;
  zoom:number;
}

export interface IProps {
    height:number;
    latitude:number;
    longitude:number;
    width:number;
    zoom:number;
    onViewportChange?: (viewport: IViewport) => void;
  }

function Map({height, latitude, longitude, width, zoom, onViewportChange}: IProps) {
    return (
    <div className="Map">
    <MapGl.InteractiveMap
        height={height}
        latitude={latitude}
        longitude={longitude}
        width={width}
        zoom={zoom}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/jasdeepk/cjg36nl0uiuhb2srvxudn22nm" 
        onViewportChange={onViewportChange}
       />
    </div>
    );
}

export default Map;