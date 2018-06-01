// src/reducers/index.tsx

import { combineReducers } from 'redux';
import { ReceiveBusAction, RequestBusAction, ViewportAction  } from '../actions';
import * as constants from '../constants';
import { IStoreState, IStoreFrontend, IStoreBus, defaultState, defaultFrontend } from '../types/index';
import * as defaults from '../index';

export function viewport(state: IStoreState = defaultState, action: ViewportAction): IStoreState {
  console.log(state);
  console.log(state.viewport.height);
  switch(action.type) {
    case constants.CHANGE_VIEWPORT:
      return {
        ...state, 
        viewport: {
          height: action.height, 
          latitude: action.latitude, 
          longitude: action.longitude, 
          width: action.width, 
          zoom: action.zoom
        }
      }
    default: 
      return { ...state };
  }
}

export function busRequest(state: IStoreState = defaultState, action: RequestBusAction | ReceiveBusAction): IStoreState {
  switch(action.type) {
    case constants.REQUEST_BUSES:
      return {
        ...state, 
        busRequest: {
          ...state.busRequest,
          buses: action.buses,
          frontend: frontend(state.busRequest.frontend, action)
        }
      }
    case constants.RECEIVE_BUSES:
      return {
        ...state
      }
    default: 
      return  {...state};
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