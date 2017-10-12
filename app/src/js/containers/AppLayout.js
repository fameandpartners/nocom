import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Switch, Route } from 'react-router';
import App from '../App';
import Product from '../Product';
import Home from '../Home';

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
    console.log(this.props);

    return (
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/pdp" component={App} />
        <Route path="/product/:id" component={Product} />
      </Switch>
    );
  }
}

export default AppLayout;
