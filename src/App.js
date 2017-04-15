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
  HelpBlock, Thumbnail } from 'react-bootstrap'

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
          <Col xs={6} md={4}>
          <Thumbnail src={this.props.object.pic} style={{width: 300}} >
          <h3>{this.props.object.name}</h3>
          </Thumbnail>
          </Col>
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
        <Link to="/login">
          <Button style={{float: 'right', width: "80px", margin: 2.5}}  bsStyle="default">Log in</Button>
        </Link>
        <Button style={{float: 'right',  width: "80px", margin: 2.5}}  bsStyle="default">Register</Button>
      </ButtonToolbar>
    )
    else
      topRight = (<Link to={'/user/'+this.state.currentUser}>
        <img src={this.state.users[this.state.currentUser].photo} style={{width: 100, marginTop: 30}}/>
      </Link>)

    return (
      <Router>
      <div style={{width: 800, margin: '0 auto'}}>
        <div className="row">
         <Col xs={6} md={4} style={{float: 'right', margin: '0 auto'}} >
            {topRight}
          </Col>
          </div>

      <div className="row">
        <Col md={12}>
          <Link to="/"><img className="img-responsive" src="logo.png" alt="" style={{margin: '20px auto 40px auto', height: 120}}/></Link>
        </Col>
      </div>

      <button onClick={()=>{
            this.demoIndex = (this.demoIndex + 1) % 3
            this.state.loggedIn = this.demoData[this.demoIndex].loggedIn
            this.state.currentUser = this.demoData[this.demoIndex].currentUser
            this.setState(this.state)
          }}>toggle</button>

         <FormGroup bsSize="large">
            <FormControl 
              style={{height:"60px", paddingLeft: "30px"}}
              type="text"
              id="search"
              placeholder="Search for iterm ..."
            />
          </FormGroup>


      <hr></hr>

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
