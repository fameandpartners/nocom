/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';

export default class HomePageTile extends React.Component {
  constructor(props) {
    super(props);
    this.renderDress = this.renderDress.bind(this);
  }

  renderDress() {
    return(<tr><td><Link to={{pathname: "/product/" + this.props.product.product_id, state:this.props.product}}>{this.props.product.name}</Link></td><td><img src={this.props.product.images[0].url} /></td></tr>)
  }
  
  render() {
    return (<table>{this.renderDress()}</table>);
  }
}

