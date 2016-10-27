import React from 'react';
import { Link } from 'react-router';
import RedditPage from './components/reddit/RedditPage.jsx'
import Footer from './components/footer/Footer.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React Reddit</h1>
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
        </ul>
        <RedditPage />
        <Footer />
      </div>
    )
  }
}

export default App;
