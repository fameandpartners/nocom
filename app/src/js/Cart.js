/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';

import FirebaseComponent from './components/nocom/FirebaseComponent';

class Cart extends FirebaseComponent {
  constructor(props) {
    super(props);
    this.connectToFirebase();
    
    console.log( firebase.auth().currentUser );    
  }

  componentDidMount() {
    if( firebase.auth().currentUser === null )
    {
      this.props.history.push( '/login' );
    }
  }
  render()
  {
    return( <div>
            blah
            </div> );
  }
  
}

export default Cart;
