/* eslint-disable */

import * as firebase from 'firebase';
import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { Motion, spring } from 'react-motion';
import Resize from '../../decorators/Resize';
import PDPBreakpoints from '../../libs/PDPBreakpoints';
import FirebaseComponent from './FirebaseComponent';
import HomePageTile from './HomePageTile';

// Actions
import * as AppActions from '../../actions/AppActions';

function stateToProps(state) {
  // Which part of the Redux global state does our component want to receive as props?
  return {
    sideMenuOpen: state.$$appState.get('sideMenuOpen'),
  };
}

function dispatchToProps(dispatch) {
  const actions = bindActionCreators(AppActions, dispatch);
  return {
    activateSideMenu: actions.activateSideMenu,
  };
}
class AppMain extends FirebaseComponent {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      products: [],
    };
    this.connectToFirebase();
    this.fetchProducts();
  }

  addProduct(data) {
    const product = data.val();
    this.setState({ products: this.state.products.concat(<HomePageTile key={data.key} product={product} />) });
  }

  fetchProducts() {
    this.productsDB = firebase.apps[0].database().ref('/products');
    this.productsDB.on('child_added', this.addProduct);
  }

  handleCloseMenu() {
    const { activateSideMenu } = this.props;
    activateSideMenu({ sideMenuOpen: false });
  }

  render() {
    return (
      <div className="App__main u-height--full grid-middle layout-container"><div>{this.state.products}</div></div>
    );
  }
}

AppMain.propTypes = {
  // sideMenuOpen: PropTypes.bool,
  activateSideMenu: PropTypes.func.isRequired,
  // // Decorator Props
  // breakpoint: PropTypes.string.isRequired,
  // winWidth: PropTypes.number.isRequired,
};

AppMain.defaultProps = {
  sideMenuOpen: false,
};

export default Resize(PDPBreakpoints)(connect(stateToProps, dispatchToProps)(AppMain));
