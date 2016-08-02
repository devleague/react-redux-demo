'use strict';

import React from 'react';
import { connect } from 'react-redux'

class RedditItem extends React.Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  };

  handleDelete(e) {
    const id = e.target.id;
    this.props.removeItem(id);
  };

  render() {
    return (
      <div className='redditItem'>
        <h3>{ this.props.children }</h3>
        <p>Author: {this.props.author}</p>
        <button
          id={this.props.id}
          onClick={this.handleDelete} >
          X
        </button>
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeItem: () => {
      dispatch({
        type: 'REMOVE_ITEM',
        index: ownProps.index,
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RedditItem);;
