import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, FormGroup, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class ObjectDetails extends Component {
  render() {
    let objectId = this.props.match.params.id
    let object = this.props.objects.find((object)=>{return object.id===objectId})

    return (
      <div>
        <h1>{object.name}</h1>
        <img src={object.pic} alt=""/>
        
        <p>
          Lorem ipsum dolor set amit {object.id}
        </p>
        <p>
        </p>
        <table>
          
        </table>
      </div>
    )
  }
}

export default ObjectDetails