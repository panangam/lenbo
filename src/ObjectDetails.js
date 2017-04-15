import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, FormGroup, FormControl, Row, Col, Image  } from 'react-bootstrap'
import { Link} from 'react-router-dom'

class ObjectDetails extends Component {
  render() {
    console.log(this.props.objects.find((object)=>{return object.id===this.props.id}))
    let object = this.props.objects.find((object)=>{return object.id==this.props.id})

    return (
      <div>

        <div>
        <h1>{object.name}&nbsp;<span style={{background: '#f0ad4e', color: 'white', padding: '5px', borderRadius: '5px' }}>{object.price}</span></h1>
        <img src={object.pic} alt=""/>
        </div>
        
        <div>
          <Link to="/confirm">
          <Button bsStyle="warning" style={{height: '50px', width: '120px', fontSize: "16px"}}>Request</Button>
          </Link>
        </div>

        <hr></hr>

          <div style={{margin: '40px'}}>
            <h3 >About Lender</h3>
            <hr></hr>
             <h3 >Steve III</h3>
            <h4>Santa Clara, CA</h4>
          </div>

          <div style={{textAlign: 'left', margin: '40px'}}>
            <h3 >Review</h3>
            <hr></hr>
            <Row>
            <Col xs={1} md={1}>
              <Image src="https://i.vimeocdn.com/portrait/3035991_50x50" rounded />
            </Col>
          <Col xs={10} md={10}>
              <h4>{object.review}</h4>
          </Col>
          </Row>
          </div>

          </div>      
    )
  }
}

export default ObjectDetails