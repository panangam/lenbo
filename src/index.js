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

console.log(hashHistory);

ReactDOM.render(
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/object/:id" component={ObjectDetails} />
    </div>
  </Router>,
  document.getElementById('root')
);
