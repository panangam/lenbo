import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, FormGroup, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class ObjectDetails extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.object}</h1>
        <img src="https://i.vimeocdn.com/portrait/58832_300x300" alt=""/>
        
        <p>
          Lorem ipsum dolor set amit {this.props.match.params.id}
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