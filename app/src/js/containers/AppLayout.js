/* eslint-disable */

import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Switch, Route } from 'react-router';
import App from '../App';
import Product from '../Product';
import Home from '../Home';
import Login from '../Login';
import Cart from '../Cart';

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

  loadHome() {
    return (<Home firebaseDatabase="nocom-dev"/>)
  }

  loadCart(props) {
    return (<Cart firebaseDatabase="nocom-dev" firebaseAPI="AIzaSyDaiBpTAKCzSr8sjP96KKBhCXSt1RT96ys" {...props}/>)
    
  }
  render() {
    console.log('hitting AppLayout render');
    return (
      <Switch>
        <Route exact path="/" component={this.loadHome} />
        <Route exact path="/pdp" component={App} />
        <Route path="/product/:id" component={Product} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={this.loadCart} />
           
      </Switch>
    );
  }
}

export default AppLayout;
