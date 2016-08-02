import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
import About from './components/static/About.jsx';
import RedditPage from './components/reddit/RedditPage.jsx';
import NoMatch from './components/static/NoMatch.jsx';
import App from './App.jsx';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

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
