import React from 'react';
import RedditPage from './reddit/RedditPage.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <RedditPage redditUrl='https://www.reddit.com/r/Showerthoughts.json' />
      </div>
    )
  }
}

export default App;
