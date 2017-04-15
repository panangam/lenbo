import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, FormGroup, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class ObjectEntry extends Component {
  render() {
    return (
      <div>
        <Link to={'/object/'+this.props.object.id}>
          <img src={this.props.object.pic} style={{width: 100, height: 100}} />
          <b>{this.props.object.name}</b>
        </Link>
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
          id: 0,
          name: "test1",
          pic: "https://i.vimeocdn.com/portrait/58832_300x300",
        },
        {
          id: 1,
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
            style={
              {maxWidth: 400, margin: '0 auto 10px'}
            }
            type="text"
          />
        </FormGroup>
        <hr></hr>
        {this.state.objects.map((object) => 
          <ObjectEntry object={object} key={object.id} />
        )}
      </div>
    );
  }
}

export default App;
