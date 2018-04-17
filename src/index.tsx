import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import * as MapGl from 'react-map-gl';
import { createStore } from 'redux';
import Map from './containers/Hello'
// import Hello from './containers/Hello';
import './index.css';
import { storeUpdatedViewport } from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import { IStoreState } from './types/index';


const defaultViewport = {
  height:700,
  latitude:49.259993,
  longitude:-123.115060,
  width:1000,
  zoom:11.16,
}

const store = createStore<IStoreState>(storeUpdatedViewport, {...defaultViewport});

ReactDOM.render(
  <Provider store={store}>
    <Map />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();