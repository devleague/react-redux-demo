import React from 'react';
import { Link } from 'react-router'
import RedditPage from './reddit/RedditPage';
import Header from './shared/Header';
import Footer from './static/Footer';

class App extends React.Component {
  render() {
    const URL ='https://www.reddit.com/r/Showerthoughts.json';

    return (
      <div>
        <Header />
        <h1>React Reddit</h1>
          {this.props.children || <RedditPage redditUrl={URL}/>}
        <Footer />
      </div>
    )
  }
}

export default App;
