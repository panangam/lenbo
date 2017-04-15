import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'
import { 
  Button, 
  FormGroup, 
  FormControl, 
  Col, 
  ButtonToolbar,
  ControlLabel,
  HelpBlock,
  Panel } from 'react-bootstrap'

//import './LoginFireBase.js'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      passwork: '',
    }
  }

  handleChangeEmail(e) {
    this.setState({ 
      email: e.target.value,
      password: this.state.password,
    });
  }

  handleChangePassword(e) {
    this.setState({ 
      email: this.state.email,
      password: e.target.value,
    });
  }

  render() {
    return (
      <Panel style={{width: 500, margin: '0 auto'}}>
      <form>
        <FormGroup
          controlId="email"
          //validationState={this.getValidationState()}
        >
          <ControlLabel>Email</ControlLabel>
          <FormControl
            type="text"
            name="email"
            value={this.state.email}
            placeholder="Enter email"
            onChange={this.handleChangeEmail}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup
          controlId="password"
          //validationState={this.getValidationState()}
        >
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Enter password"
            onChange={this.handleChangePassword}
          />
          <FormControl.Feedback />
        </FormGroup>
        <ButtonToolbar bsClass="text-center">
          <Button type="submit" bsStyle="primary">
            Submit
          </Button>
        </ButtonToolbar>
      </form>
      </Panel>
    )
  }
}

export default Login