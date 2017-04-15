import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import App from './App';
import Root from './Root';
import './index.css';

console.log(Route);

ReactDOM.render(
  <Router>
    <Route path="/" component={Root} />
  </Router>,
  document.getElementById('root')
);
