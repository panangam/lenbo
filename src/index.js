import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  browserHistory
} from 'react-router-dom';
import App from './App';
import Root from './Root';
import ObjectDetails from './ObjectDetails'
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
