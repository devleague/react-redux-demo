import React from 'react';
import ReactDOM from 'react-dom';
import { 
	Router, 
	Route,
	hashHistory,
	IndexRoute,
} from 'react-router';
import About from './static/About';
import NoMatch from './static/NoMatch';
import App from './App';
import RedditPage from './reddit/RedditPage';

ReactDOM.render((
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
    	<IndexRoute component={ RedditPage }/>
    	<Route path="/about" component={ About }/>
    	<Route path='*' component={ NoMatch } />
   	</Route>
  </Router>
  ), document.getElementById('root')
);
