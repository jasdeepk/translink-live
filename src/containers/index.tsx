// src/containers/index.tsx

import { connect, Dispatch } from 'react-redux';
import Map, { IViewport } from '../components/Map';
import { IStoreState } from '../types/index';

import * as actions from '../actions/';

export function mapStateToProps({ height, latitude, longitude, width, zoom }: IStoreState) {
  return {
    height, latitude, longitude, width, zoom 
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ViewportAction>) {
  return {
    onViewportChange: (viewport: IViewport) => dispatch(
      actions.changeViewport(
        viewport.height,
        viewport.latitude,
        viewport.longitude,
        viewport.width,
        viewport.zoom
      )
    ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);