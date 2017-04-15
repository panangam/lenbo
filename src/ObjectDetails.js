import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, FormGroup, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class ObjectDetails extends Component {
  render() {
    console.log(this.props.objects.find((object)=>{return object.id===this.props.id}))
    let object = this.props.objects.find((object)=>{return object.id==this.props.id})

    return (
      <div>
        <div>
        <h1>{object.name}</h1>
        <h2>{object.price}</h2>
        <img src={object.pic} alt=""/>
        <h2>{object.review}</h2>
        </div>
        
        <div>
          <Link to="/confirm">
          <button>Rent it</button>
          </Link>
          </div>
  

        <table>
        </table>
      </div>
    )
  }
}

export default ObjectDetails