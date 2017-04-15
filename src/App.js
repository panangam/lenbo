import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ObjectDetails from './ObjectDetails'
import Login from './Login'
import { 
  Button, 
  FormGroup, 
  FormControl, 
  Col, 
  ButtonToolbar,
  ControlLabel,
  HelpBlock } from 'react-bootstrap'

import {
  BrowserRouter as Router,
  Route,
  Link,
  browserHistory,
  hashHistory
} from 'react-router-dom';

class ObjectEntry extends Component {
  render() {
    console.log(this.props.object)
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

class ObjectList extends Component {
  render() {
    return (
      <div>
      {this.props.objects.map((object) => 
        <ObjectEntry object={object} key={object.id} />
      )}
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
          name: "Road Bikes with Carbon Forks",
          price: "$500",
          pic: "http://www.bikesdirect.com/products/motobecane/images/mirage-s-white_500.jpg",
          review: "I like it, perfect for the entry to sport level athlete."
        },
        {
          id: 1,
          name: "Motobecane Mirage S",
          price: "$500",
          pic: "http://www.bikesdirect.com/products/motobecane/images/mirage-s-black_500.jpg",
          review: "It's awesome, most convenient Braking and Shifting in one location",
        }
      ]
    }
  }

  render() {
    return (
      <div style={{width: 800, margin: '0 auto'}}>
      <div className="row">
        <Col md={8}>
          <a href="/"><img src="logo.png" alt="" style={{margin: '10px 0', height: 80}}/></a>
          <FormGroup>
            <FormControl
              type="text"
              id="search"
              placeholder="search..."
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <div>
          <ButtonToolbar style={{marginTop: 30}}>
            <a href="/login">
              <Button bsStyle="primary">Log in</Button>
            </a>
            <Button bsStyle="warning">Register</Button>
          </ButtonToolbar>
          </div>
        </Col>
        <hr></hr>
      </div>
      <div className="text-center">
        <Router history={hashHistory}>
          <div>
            <Route exact path="/" component={()=><ObjectList objects={this.state.objects}/>}/>
            <Route path="/login" component={Login}/>
            <Route path="/object/:id" component={({match})=><ObjectDetails objects={this.state.objects} id={match.params.id}/>} />
            
          </div>
        </Router>
      </div>
      </div>
    );
  }
}

export default App;
