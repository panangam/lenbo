import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, FormGroup, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class CompleteTransaction extends Component {
  render() {
    return (
      <div>
       <h2>The request has been sent.</h2>
       <h2>Transaction pending!</h2>
       <h1>Key: 203040</h1>
       <h3>What next:</h3>
       <h4> 
         Make sure to save this code for verification of lending and borrowing. You will have to give this code to the person you are borrowing from. You will give this code to him/her after reciving the item. So make sure that you dont loose this code. The Person you borrowed from will enter this code to prove to us that you have recived the item
         </h4>
      </div>
    )
  }
}

export default CompleteTransaction