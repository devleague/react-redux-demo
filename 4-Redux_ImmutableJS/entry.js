import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  hashHistory,
  IndexRoute
} from 'react-router';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
import About from './components/static/About';
import RedditPage from './components/reddit/RedditPage';
import NoMatch from './components/static/NoMatch';
import App from './App';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

const initialState = store.getState();

ReactDOM.render((
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App } >
        <IndexRoute component={ RedditPage } />
        <Route path="/about" component={ About } />
        <Route path='*' component={ NoMatch } />
      </Route>
    </Router>
  </Provider>
  ), document.getElementById('root')
);
