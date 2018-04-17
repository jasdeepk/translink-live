import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Hello from './containers/Hello';
import './index.css';

// import * as MapGl from 'react-map-gl';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { IStoreState } from './types/index';

const store = createStore<IStoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

// class Map extends React.Component {

  // constructor(props: any) {
  //   super(props);
  //   this.state = {
  //     viewport: {
  //       latitude: location.latitude,
  //       longitude: location.longitude,
  //       zoom: 11
  //     }
  //   };
  // }

  // public render() {
    // return (
      // <MapGl.Viewport
      //   {...this.state.viewport}
      //   // onViewportChange={this.changeViewport(viewport)}
      //   // tslint:disable-next-line:jsx-no-lambda
      //   // onViewportChange={(viewport : any) => this.setState({viewport})}
      // />
      // <MapGl.StaticMap { ...this.state.viewport } { ...this.props }/>
    // );
  // }
// }

// helpers

ReactDOM.render(
  // <Map />,
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
