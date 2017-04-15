import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, FormGroup, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class CompleteTransaction extends Component {
  render() {
    return (
     <div>
       <h3>The request has been sent!</h3>
       <Button bsStyle="warning" style={{height: '50px', width: '300px', fontSize: "16px", margin: '20px'}}>Transaction pending!</Button>
       <div style={{margin: "20px"}}>
       <h1>Key: <b>203040</b></h1>
       </div>
       
       <div>
       <h4>What next:</h4>
       </div>

       <div>
        <h5> <em>
         Make sure to save this code for verification of lending and borrowing. 
         You will have to give this code to the person you are borrowing from. 
         You will give this code to him/her after reciving the item. 
         So make sure that you dont loose this code. 
         The Person you borrowed from will enter this code to prove to us that you have recived the item
         </em></h5>
        </div>
    
      </div>
    )
  }
}

export default CompleteTransaction