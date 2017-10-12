/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import autoBind from 'react-autobind';

import FirebaseComponent from './components/nocom/FirebaseComponent';
import HomePageTile from './components/nocom/HomePageTile';


class Home extends FirebaseComponent {
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

  render() {
    return (
      <div className="Welcome">
        <Link to="/home">Fame and Partners</Link>
        <Link to="/pdp">PdP Link</Link>
        <div>{this.state.products}</div>
      </div>
    );
  }
}

export default Home;
