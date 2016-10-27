'use strict';

import Immutable from 'immutable';
import {
  SET_ITEMS,
  REMOVE_ITEM,
} from '../actions/redditActions';

const initialState = Immutable.List();

const redditItemReducer = (state = initialState, action) => {

  let newState = state;

  switch(action.type) {
    case 'REMOVE_ITEM':
      return state.delete(action.index);

    case 'SET_ITEMS':
      return Immutable.fromJS(action.data);

    default:
      newState;
  }
  return newState;
};

export default redditItemReducer;
