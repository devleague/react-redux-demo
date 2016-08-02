'use strict';

import React from 'react';
import RedditItem from './RedditItem.jsx';

class RedditList extends React.Component {
  render() {
    var redditListNode = this.props.redditData.map(function(redditDataItem, index){
      return (
        <RedditItem
          id={redditDataItem.id}
          index={index}
          author={redditDataItem.author}
          key={redditDataItem.id} >
          {redditDataItem.title}
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

export default RedditList;
