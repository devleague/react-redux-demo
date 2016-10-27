'use strict';

export const SET_ITEMS = 'SET_ITEMS';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id: id,
  }
};

export const setItems = (data) => {
  return {
    type: SET_ITEMS,
    data: data
  }
};
