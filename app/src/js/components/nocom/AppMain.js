import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { Motion, spring } from 'react-motion';
import Resize from '../../decorators/Resize';
import PDPBreakpoints from '../../libs/PDPBreakpoints';

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

class AppMain extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  handleCloseMenu() {
    const { activateSideMenu } = this.props;
    activateSideMenu({ sideMenuOpen: false });
  }

  render() {
    // const { sideMenuOpen } = this.props;
    // console.log('this.breakpoint', this.props.breakpoint);
    // console.log('sideMenuOpen', sideMenuOpen);
    return (
      <div
        className="App__main u-height--full grid-middle layout-container"
      >
        <div>This is the pdp stuff</div>
      </div>
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
