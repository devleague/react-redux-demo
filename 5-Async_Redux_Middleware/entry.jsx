import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import RedditPage from './components/reddit/RedditPage.jsx';
import About from './components/static/About.jsx';
import NoMatch from './components/static/NoMatch.jsx';
import App from './App.jsx';

const store = configureStore();

const initialState = store.getState();

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path='*' component={NoMatch} />
    </Router>
  </Provider>
  ), document.getElementById('root')
);
