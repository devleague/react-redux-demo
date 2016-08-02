import React from 'react';
import { Link } from 'react-router'
import RedditPage from './reddit/RedditPage.jsx';
import Footer from './footer/footer.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React Reddit</h1>
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
        </ul>
        <RedditPage redditUrl='https://www.reddit.com/r/Showerthoughts.json' />
        <Footer />
      </div>
    )
  }
}

export default App;
