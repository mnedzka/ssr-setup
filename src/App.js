import React, { Component } from 'react';

import { Switch, Route } from 'react-router';
import Home from './pages/HomePageComponent';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            path='/'
            render={props => {
              return <Home {...props} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
