import React, {Component} from 'react';
import {Provider} from 'react-redux';
import AppContainer from './Config/navigation';
import store from './Config/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer uriPrefix="/app" />
      </Provider>
    );
  }
}

export default App;
