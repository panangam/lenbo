import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, FormGroup, FormControl, Row, Col  } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class LendingStatus extends Component {
  render() {
    let object = this.props.objects.find((object)=>{
      return object.id==this.props.id
    })
    return (
      <Row>
        <Col md={4}>
          <img src={object.pic} alt="" style={{width: '100%'}}/>
        </Col>
        <Col md={8}>
          <b>End rental</b>
          <FormControl
            type="text"
          />
        </Col>
      </Row>
    )
  }
}

export default LendingStatus