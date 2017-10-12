import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Link } from 'react-router-dom';


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
      <div className="Welcome">
        <Link to="/home">Fame and Partners</Link>
        <Link to="/pdp">PdP Link</Link>
        This is the home page
      </div>
    );
  }
}

export default Welcome;
