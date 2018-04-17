// src/reducers/index.tsx

import { ViewportAction } from '../actions';
import * as constants from '../constants'
import { IStoreState } from '../types/index';

export function storeUpdatedViewport(state: IStoreState, action: ViewportAction): IStoreState {
  switch(action.type) {
    case constants.CHANGE_VIEWPORT:
      return {
        ...state, 
        height: action.height, 
        latitude: action.latitude, 
        longitude: action.longitude, 
        width: action.width, 
        zoom: action.zoom
      }
  }
  return state;
}