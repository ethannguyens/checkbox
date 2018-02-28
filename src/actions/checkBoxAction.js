import * as types from './actionTypes';

export function updateSelectedItems(selectedItems) {
  return {type: types.UPDATED_SELECTED_ITEMS, selectedItems};
}
