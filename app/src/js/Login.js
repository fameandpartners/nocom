import React, { Component } from 'react';
import autoBind from 'react-autobind';
// import { Link } from 'react-router-dom';


class Welcome extends Component {
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
    return (
      <div id="firebaseui-auth-container">
        Suckit!
      </div>
    );
  }
}

export default Welcome;
