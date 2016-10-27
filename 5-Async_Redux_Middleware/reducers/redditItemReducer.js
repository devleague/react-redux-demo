'use strict';
import { combineReducers } from 'redux'
import Immutable from 'immutable';
import {
  SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT,
  REQUEST_POSTS, RECEIVE_POSTS
} from './../actions/redditActions';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: []
};

function selectedSubreddit(state = 'reactjs', action) {
  switch (action.type) {
  case "SELECT_SUBREDDIT":
    return action.subreddit
  default:
    return state
  }
}

function posts(state = initialState, action) {
  console.log('action.type: ', action.type);
  switch (action.type) {
    case "INVALIDATE_SUBREDDIT":
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case "REQUEST_POSTS":
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case "RECEIVE_POSTS":
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    case 'REMOVE_ITEM':
      const newRedditItems = state.rootReducer.postsBySubreddit[action.subreddit].items.filter((item) => {
        return item.data.id !== action.id
      })
      return Object.assign({}, state, {items: newRedditItems});
      break;

    default:
      return state
  }
}

function postsBySubreddit(state = { }, action) {
  switch (action.type) {
    case "INVALIDATE_SUBREDDIT":
    case "RECEIVE_POSTS":
    case "REQUEST_POSTS":
      return Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit
})

export default rootReducer;
