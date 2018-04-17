import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import Hello from './containers/Hello';
import './index.css';

import * as MapGl from 'react-map-gl';
// import { createStore } from 'redux';
// import { enthusiasm } from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
// import { IStoreState } from './types/index';

// const store = createStore<IStoreState>(enthusiasm, {
//   enthusiasmLevel: 1,
//   languageName: 'TypeScript',
// });
const MAPBOX_TOKEN = 'pk.eyJ1IjoiamFzZGVlcGsiLCJhIjoiY2pnMzVyMGprMXoxMzJ4bnk5d2k2anFiYSJ9.YZhsNX2-Chp9N95Au0DIhw';

export interface IViewport {
  height:number;
  latitude:number;
  longitude:number;
  width:number;
  zoom:number;
}

// interface IMyProps {}
export interface IProps {
  viewport: IViewport
}

// interface IMyProps {}
export interface IState {
  viewport: IViewport
}

const defaultViewport = {
  height:700,
  latitude:49.259993,
  longitude:-123.115060,
  width:1000,
  zoom:11.16,
}

export default class Map extends React.Component<IProps, IState>{
  constructor(props: IProps) {
  	super(props);
  	this.state = {
      viewport: {
        height:700,
        latitude:49.259993,
        longitude:-123.115060,
        width:1000,
        zoom:11.16,
      }
  	};
  }

  // public state = {
  //   viewport: {
  //     height:700,
  //     latitude:49.259993,
  //     longitude:-123.115060,
  //     width:1000,
  //     zoom:11.16,
  //   }
  // }

  public render() {
    return (
      <div className="Map">
      <MapGl.InteractiveMap
        {...this.state.viewport}
        // width={this.state.viewport.width}
        // height={this.state.viewport.height}
        // latitude={this.state.viewport.latitude}
        // longitude={this.state.viewport.longitude}
        // zoom={this.state.viewport.zoom}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        // isDragging={true}
        mapStyle="mapbox://styles/jasdeepk/cjg36nl0uiuhb2srvxudn22nm" 
        onViewportChange={this.onViewportChange}
       />
    </div>
    );
  }

  private onViewportChange = (viewport : IViewport) => {
      if (viewport.longitude > 0) {
          viewport.longitude = 0;
      }
      this.setState({viewport});
  }
}

// helpers
// ReactDOM.render(<Map />, document.getElementById('root'));
ReactDOM.render(
  // <Provider store={store}>
    <Map viewport={defaultViewport} />,
    // <Hello />
  // </Provider>,
  document.getElementById('root')
);
registerServiceWorker();