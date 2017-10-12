/* eslint-disable */
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Link } from 'react-router-dom';
import {browserHistory} from 'react-router';

// App Components
import SideMenu from './components/shared/SideMenu';
import AppMain from './components/nocom/AppMain';

// Global Styles
import '../css/global/variables.scss';
import '../css/reset.scss';
import '../css/gridlex.scss';
import '../css/utility.scss';
import '../css/layout.scss';
import '../css/typography.scss';
import '../css/components/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  handleClick() {
    console.warn('javascript working');
  }

  getProductInformation(id) {
    // TODO: GET PRODUCT INFO
    console.log('DOUG HERE GET PRODUCT INFORMATION');
    console.log('id', id);
  }

  componentDidMount() {
    this.getProductInformation(this.props.match.params.id);
  }

  addToBag() {
    this.props.history.push( '/login' );
  }
  
  render() {
    console.log('this.props', this.props);
    const {
      name,
      description,
      price,
      product_id,
      images,
    } = this.props.location.state;
    return (
      <div className="Product">
        <header>
          <nav className="nav">
            <Link to="/home">Fame and Partners NoCom</Link>
            <br />
            <Link to="/pdp">Go Back to Products</Link>
          </nav>
        </header>
        <div
          className="App__main u-height--full grid-middle layout-container"
        >
          <div className="div grid-12 u-width--full">
            <div className="col-6">
              <img className="u-width--full" src={images[0].url} alt="Dress" />
            </div>
            <div className="col-6">
              <div className="grid-12">
                <h2>Dress {name}</h2>
                <ul>
                  <li>{price}</li>
                  <li dangerouslySetInnerHTML={{__html: description}} />
                  <Link to={{pathname:"/cart", state:this.props.location.state}} className="btn">Add To Bag</Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
