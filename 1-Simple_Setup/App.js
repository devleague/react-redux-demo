'use strict'

// Before adding the XHR request to reddit - use this placeholder data - once the basic application is built out - you can add the XHR request and comment this data out.
var data = [
  {id:1, title:'Cats are great', author:"joejoebinks3"},
  {id:2, title:'Dogs are great', author:"rayraybinks3"},
  {id:3, title:'Fish are great', author:"jonjonbinks3"},
  {id:4, title:'Lizards are great', author:"jsonjsonbinks3"}
];

class RedditPage extends React.Component {
  constructor() {
    super();
    this.state = {
      redditData : [],
    }
    // Since the callback function changes context - we need to bind the context of the React component so that we can update state once we receive the data from Reddit
    this.onRedditData = this.onRedditData.bind(this);
  };

  onRedditData(data) {
    const parsedRedditData = JSON.parse(data.currentTarget.response).data.children
    this.setState({ redditData: parsedRedditData });
  };

  onRedditError(data) {
    console.error(this.props.redditUrl, status, err.toString());
  };

  loadDataFromReddit() {
    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", this.onRedditData);
    oReq.addEventListener("error", this.onRedditError);
    oReq.open("GET", this.props.redditUrl);
    oReq.send();
  };

  componentDidMount() {
    this.loadDataFromReddit();
  };

  render() {
    return (
      <div>
        <h1>Reddit</h1>
        <RedditList redditData={this.state.redditData} />
      </div>
    )
  }
};

RedditPage.propTypes = {
  RedditPage: React.PropTypes.array,
};

RedditPage.defaultProps = {
  redditData: [],
};

class RedditList extends React.Component {
  render() {
    var redditListNode = this.props.redditData.map(function(redditDataItem){
      console.log(redditDataItem.data);
      return (
        <RedditItem author={redditDataItem.data.author} key={redditDataItem.data.id} >
          {redditDataItem.data.title}
        </RedditItem>
      )
    })
    return (
      <div className='redditList'>
        <h2>Reddit List</h2>
        { redditListNode }
      </div>
    )
  }
};

class RedditItem extends React.Component {
  render() {
    return (
      <div className='redditItem'>
        <h3>{ this.props.children }</h3>
        <p>Author: {this.props.author}</p>
      </div>
    )
  }
};

ReactDOM.render(
  <RedditPage redditUrl='https://www.reddit.com/r/Showerthoughts.json' />,
  document.getElementById('root')
);