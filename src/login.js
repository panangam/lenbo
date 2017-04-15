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
  HelpBlock } from 'react-bootstrap'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      passwork: '',
    }
  }

  handleChangeUsername(e) {
    this.setState({ 
      username: e.target.value,
      password: this.state.password,
    });
  }

  handleChangePassword(e) {
    this.setState({ 
      username: this.state.username,
      password: e.target.value,
    });
  }

  render() {
    return (
      <panel>
      <form>
        <FormGroup
          controlId="username"
          //validationState={this.getValidationState()}
        >
          <ControlLabel>Username</ControlLabel>
          <FormControl
            type="text"
            name="username"
            value={this.state.username}
            placeholder="Enter username"
            onChange={this.handleChangeUsername}
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
      </panel>
    )
  }
}

export default Login