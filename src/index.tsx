import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as request from 'superagent';
import * as constants from './constants/index';
import Map from './containers/index';
import './index.css';
import reducer from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import { IStoreBus,  IStoreBusRequest, IStoreFrontend, IStoreState, IStoreViewport, defaultState } from './types/index';

const TRANSLINK_URI_BASE = 'http://api.translink.ca/rttiapi/v1/buses';
const API_KEY = 'kC9EhPUsGX9Ih8kbnBKi';
// const TRANSLINK_URI_FULL = 'http://api.translink.ca/rttiapi/v1/buses?apikey=kC9EhPUsGX9Ih8kbnBKi';

// request
//   .get(TRANSLINK_URI_BASE)
//   .query({ apikey: API_KEY}) // query string
//   .withCredentials()
//   .then(function(res) {
//     console.log(res)
//   })
//   .then(function(err) {
//     console.log(err)
//   });


const store = createStore(reducer, { ...defaultState });

ReactDOM.render(
  <Provider store={store}>
    <Map />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();