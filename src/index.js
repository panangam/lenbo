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
import * as firebase from 'firebase'; 

 	var config = {
    apiKey: "AIzaSyAeO7IBdEX_pVePdytyPArFTB1e2RfhHWg",
    authDomain: "lenbo-2e538.firebaseapp.com",
    databaseURL: "https://lenbo-2e538.firebaseio.com",
    projectId: "lenbo-2e538",
    storageBucket: "lenbo-2e538.appspot.com",
    messagingSenderId: "511604296562"
  };

firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
