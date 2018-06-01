// src/containers/index.tsx

import { connect, Dispatch } from 'react-redux';
import Map, { IViewport } from '../components/Map';
import { IStoreState } from '../types/index';

import * as actions from '../actions/';

export function mapStateToProps({ viewport, busRequest }: IStoreState) {
  console.log(viewport.height);
  return {
    height:viewport.height,
    latitude:viewport.latitude,
    longitude:viewport.longitude,
    width:viewport.width,
    zoom:viewport.zoom
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ViewportAction>) {
  console.log("map dispatch viewport action");
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