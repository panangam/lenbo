import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, FormGroup, FormControl } from 'react-bootstrap'

class ObjectEntry extends Component {
  render() {
    return (
      <div>
        <img src={this.props.pic} style={{width: 100, height: 100}} />
        <b>{this.props.name}</b>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super()

    this.state = {
      objects: [
        {
          name: "test1",
          pic: "https://i.vimeocdn.com/portrait/58832_300x300",
        },
        {
          name: "test2",
          pic: "https://i.vimeocdn.com/portrait/58832_300x300",
        }
      ]
    }
  }

  render() {
    return (
      <div className="row text-center">
        <h1>Lenbo</h1>
        <FormGroup>
        <FormControl
          className="text-center"
          type="text"
        />
        </FormGroup>
        <hr></hr>
        {this.state.objects.map((object) => 
          <ObjectEntry pic={object.pic} name={object.name} key={object.name} />
        )}
      </div>
    );
  }
}

export default App;
