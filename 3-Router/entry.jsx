import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import About from './static/About.jsx';
import NoMatch from './static/NoMatch.jsx';
import App from './App.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    {/* add the routes here */}
    <Route path="/about" component={About}/>
    <Route path='*' component={NoMatch} />
  </Router>
  ), document.getElementById('root')
);
