'use strict';

import React,  { PropTypes } from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux'
import RedditList from './RedditList.jsx';

class RedditPage extends React.Component {
  constructor() {
    super();
    this.onRedditData = this.onRedditData.bind(this);
  };

  onRedditData(data) {
    const parsedRedditData = JSON.parse(data.currentTarget.response).data.children
    this.props.setItems(parsedRedditData);
  };

  onRedditError(data) {
    console.error(this.props.url, status, err.toString());
  };

  loadDataFromReddit() {
    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", this.onRedditData);
    oReq.addEventListener("error", this.onRedditError);
    oReq.open("GET", 'https://www.reddit.com/r/Showerthoughts.json');
    oReq.send();
  };

  componentDidMount() {
    this.loadDataFromReddit();
  };

  render() {
    return (
      <div>
        <h1>Reddit</h1>
        <RedditList redditData={this.props.redditData} />
      </div>
    )
  }
};

RedditPage.propTypes = {
  redditData: PropTypes.array.isRequired,
};

RedditPage.defaultProps = {
  redditData: [],
};

const mapStateToProps = (state) => {
  return {
    redditData: state.redditItemReducer.toJS(),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setItems: (data) => {
      dispatch({
        type: 'SET_ITEMS',
        data: data
      })
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RedditPage);;
