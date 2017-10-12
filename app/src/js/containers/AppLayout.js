import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Switch, Route } from 'react-router';
import App from '../App';
import Welcome from '../Welcome';

class AppLayout extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  handleClick() {
    console.warn('javascript working');
  }
  sampleTest() {
    return true;
  }

  render() {
    console.log('hitting AppLayout render');
    return (
      <Switch>
        <Route path="/welcome" component={Welcome} />
        <Route exact path="/" component={App} />
      </Switch>
    );
  }
}

export default AppLayout;
