// src/components/Map.tsx

import * as React from 'react';
import * as MapGl from 'react-map-gl';
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
    <div className='col12 contain fill-navy dark inline'>
      <div className='col12 pad2 fill-darken1 pin-left'>
        <h1 className="title contain">Transit Live</h1>
      </div>
      <div className='fr quiet'>
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
    </div>
    );
}

export default Map;