// src/reducers/index.tsx

import { combineReducers } from 'redux';
import { ReceiveBusAction, RequestBusAction, ViewportAction  } from '../actions';
import * as constants from '../constants';
import * as defaults from '../index';
import { defaultBusRequest, defaultFrontend, defaultState, defaultViewport, IStoreBus, IStoreBusRequest, IStoreFrontend, IStoreState, IStoreViewport } from '../types/index';

export function viewport(state: IStoreViewport = defaultViewport, action: ViewportAction): IStoreViewport {
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
    default: 
      return { ...state };
  }
}

export function busRequest(state: IStoreBusRequest = defaultBusRequest, action: RequestBusAction | ReceiveBusAction): IStoreBusRequest {
  switch(action.type) {
    case constants.REQUEST_BUSES:
      return {
        ...state,
        buses: action.buses,
        frontend: frontend(state.frontend, action)
      }
    case constants.RECEIVE_BUSES:
      return {
        ...state
      }
    default:
      return {...state};
  }
}

// export function buses(state: IStoreBus[], action: RequestBusAction | ReceiveBusAction) : IStoreBus[] {
//   switch(action.type) {
//     case constants.REQUEST_BUSES:
//       return {
//         ...state, 
//         busRequest: {
//           ...state.busRequest,
//           buses: action.buses
//         }
//       }
//     case constants.RECEIVE_BUSES:
//       return {
//         ...state
//       }
//     default: 
//       return  {...state};
//   }
// }

export function frontend(state: IStoreFrontend = defaultFrontend, action: RequestBusAction | ReceiveBusAction) : IStoreFrontend {
  switch(action.type) {
    case constants.REQUEST_BUSES:
      return {
        ...state,
        didInvalidate: action.frontend.didInvalidate,
        isFetching: action.frontend.isFetching,
        lastUpdated: action.frontend.lastUpdated
      }
    case constants.RECEIVE_BUSES:
      return {
        ...state
      }
    default: 
      return  {...state};
  }
}

export default combineReducers<IStoreState>({
  busRequest,
  viewport
})