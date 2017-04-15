import React, { Component } from 'react'
import { Link } from 'react-router'
import { App } from './App'

export default class Root extends Component {
  render() {
    return (
      <div>
      this is root
        {this.props.children}
      <br/>
      this is end of root
      </div>
    )
  }
}