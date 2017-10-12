/* eslint-disable */

import React from 'react';

export default class HomePageTile extends React.Component {
  constructor(props) {
    super(props);
    console.log( this.props.product.name );
    this.renderDress = this.renderDress.bind(this);
  }

  renderDress() {
    return(<tr><td><a href={"/products/" + this.props.product.product_id}>{this.props.product.name}</a></td><td><img src={this.props.product.images[0].url} /></td></tr>)
  }
  
  render() {
    return (<table>{this.renderDress()}</table>);
  }
}

