'use strict';

export const removeItem = (id) => {
  console.log('id: ', id);
  dispatch({
    type: 'remove_item',
    id: id,
  })
};

export const setItems = (data) => {
  dispatch({
    type: 'set_items',
    data: data
  })
};
