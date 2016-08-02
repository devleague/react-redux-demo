'use strict';

export const removeItem = (id) => {
  dispatch({
    type: 'REMOVE_ITEM',
    id: id,
  })
};

export const selectSubreddit = (subreddit) => {
  return {
    type: "SELECT_SUBREDDIT",
    subreddit
  }
}

export const invalidateSubreddit = (subreddit) => {
  return {
    type: "INVALIDATE_SUBREDDIT",
    subreddit
  }
}

const requestPosts = (subreddit) => {
  return {
    type: "REQUEST_POSTS",
    subreddit
  }
}

const receivePosts = (subreddit, json) => {
  return {
    type: "RECEIVE_POSTS",
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

const fetchPosts = (subreddit) => {
  return dispatch => {
    dispatch(requestPosts(subreddit))
    return fetch(`http://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)))
  }
}

const shouldFetchPosts = (state, subreddit) => {
  const posts = state.rootReducer.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export const fetchPostsIfNeeded = (subreddit) => {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit))
    }
  }
}
