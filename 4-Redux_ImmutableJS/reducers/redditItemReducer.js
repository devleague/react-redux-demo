'use strict';

import { List } from 'immutable';
import {
  SET_ITEMS,
  REMOVE_ITEM,
} from '../actions/redditActions';

const initialState = List();

const redditItemReducer = (state = initialState, action) => {

  let newState = state;

  switch(action.type) {
    case 'REMOVE_ITEM':
      return state.delete(action.index);

    case 'SET_ITEMS':
      return List(action.data);

    default:
      newState;
  }
  return newState;
};

export default redditItemReducer;
