import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ObjectDetails from './ObjectDetails'
import Login from './Login'
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
      ],
      user: 
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
    }
  }

  render() {
    return (
      <div style={{width: 800, margin: '0 auto'}}>
    <div className="row">
         <Col xs={6} md={4} style={{float: 'right', margin: '0 auto'}} >
          <ButtonToolbar style={{marginTop: 30}}>
            <a href="/login">
              <Button style={{float: 'right', width: "80px", margin: 2.5}}  bsStyle="default">Log in</Button>
            </a>
            <Button style={{float: 'right',  width: "80px", margin: 2.5}}  bsStyle="default">Register</Button>
          </ButtonToolbar>
          </Col>
          </div>

      <div className="row">
        <Col md={12}>
          <a href="/"><img className="img-responsive" src="logo.png" alt="" style={{margin: '20px auto 40px auto', height: 120}}/></a>
        </Col>
      </div>

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
        <Router>
          <div>
            <Route exact path="/" component={()=><ObjectList objects={this.state.objects}/>}/>
            <Route path="/login" component={Login}/>
            <Route path="/object/:id" component={({match})=><ObjectDetails objects={this.state.objects} id={match.params.id}/>} />
            <Route path="/confirm" component={CompleteTransaction} />
            <Route path="/user/:id" component={({match})=><UserProfile user={this.state.user} id={match.params.id}/>} />
          </div>
        </Router>
      </div>
      </div>
    );
  }
}

export default App;
