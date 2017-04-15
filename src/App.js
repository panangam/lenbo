import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ObjectDetails from './ObjectDetails'
import Login from './Login'
import LendingStatus from './LendingStatus'
import CompleteTransaction from './CompleteTransaction'
import UserProfile from './UserProfile'

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

let $ = require('jquery')

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
      loggedIn: false,
      currentUser: -1,
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
      ],
      users: [
        {
          id: 0,
          name: "Melania Trump",
          gender: "Female",
          birthday: "April 26, 1970",
          location: "Los Angeles, CA",
          photo: "https://mgtvwcbd.files.wordpress.com/2016/07/wcbd-melania-trump.jpg?w=650",
          bio: "Lorem ipsum dolor sit amet",
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
          ],
        },
        {
          id: 1,
          name: "Malaria Trump",
          gender: "Male",
          birthday: "February 30, 1970",
          location: "Los Angeles, CA",
          photo: "https://cdn.orkin.com/images/mosquitoes/mosquito-illustration_360x286.jpg",
          bio: "Lorem ipsum dolor sit ametLorem ipsum dolor sit amet",
          objects: [
            {
              id: 2,
              name: "Road Bikes with Carbon Forks",
              price: "$500",
              pic: "http://www.bikesdirect.com/products/motobecane/images/mirage-s-white_500.jpg",
              review: "I like it, perfect for the entry to sport level athlete."
            },
            {
              id: 3,
              name: "Motobecane Mirage S",
              price: "$500",
              pic: "http://www.bikesdirect.com/products/motobecane/images/mirage-s-black_500.jpg",
              review: "It's awesome, most convenient Braking and Shifting in one location",
            }
          ],
        }
      ],
    }

    this.demoData = [
      {loggedIn: false, currentUser: -1},
      {loggedIn: true, currentUser: 0},
      {loggedIn: true, currentUser: 1},
    ]

    this.demoIndex = 0
  }

  generateWord() {
    let charList = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let word = ''
    
    for (let i = 0; i < 10; i++) {
      word += charList.charAt(Math.floor(Math.random()*36))
    }
    
    console.log(word)
  }

  render() {
    let topRight

    if (this.state.currentUser < 0) topRight = (
      <ButtonToolbar style={{marginTop: 30}}>
        <a href="/login">
          <Button bsStyle="primary">Log in</Button>
        </a>
        <Button bsStyle="warning">Register</Button>
      </ButtonToolbar>
    )
    else
      topRight = (<a href={'/user/'+this.state.currentUser}>
        <img src={this.state.users[this.state.currentUser].photo} style={{width: 100, marginTop: 30}}/>
      </a>)

    return (
      <Router>
      <div style={{width: 800, margin: '0 auto'}}>
      <div className="row">
        <Col md={8}>
          <Link to='/'>
          <img src="logo.png" alt="" style={{margin: '10px 0', height: 80}}/>
          </Link>
          <button onClick={()=>{
            this.demoIndex = (this.demoIndex + 1) % 3
            this.state.loggedIn = this.demoData[this.demoIndex].loggedIn
            this.state.currentUser = this.demoData[this.demoIndex].currentUser
            this.setState(this.state)
          }}>toggle</button>
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
            {topRight}
          </div>
        </Col>
        <hr></hr>
      </div>
      <div className="text-center">
        
          <div>
            <Route exact path="/" component={()=><ObjectList objects={this.state.objects}/>}/>
            <Route path="/login" component={Login}/>
            <Route path="/object/:id" component={({match})=><ObjectDetails objects={this.state.objects} id={match.params.id}/>} />
            <Route path="/lending/:id" component={({match})=><LendingStatus objects={this.state.objects} id={match.params.id}/>} />
            <Route path="/confirm" component={CompleteTransaction} />
            <Route path="/user/:id" component={({match})=><UserProfile users={this.state.users} id={match.params.id}/>} />
          </div>
        
      </div>
      </div>
      </Router>
    );
  }
}

export default App;
