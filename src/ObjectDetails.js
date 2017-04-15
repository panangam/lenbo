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
        <h1>{object.name}&nbsp;<span style={{background: '#f0ad4e', color: 'white', padding: '5px' }}>{object.price}</span></h1>
        <img src={object.pic} alt=""/>
        </div>
        
        <div>
          <Link to="/confirm">
          <Button bsStyle="warning" style={{height: '50px', width: '120px', fontSize: "16px"}}>Request</Button>
          </Link>
          </div>

          <h3>{object.review}</h3>
  
        <table>
        </table>
      </div>
    )
  }
}

export default ObjectDetails