import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function checkBoxReducer(state = initialState.checkBox, action) {
  switch(action.type) {
    case types.UPDATED_SELECTED_ITEMS:
      return Object.assign({}, state, {selectedItems: action.selectedItems});

    default: {
      return state;
    }
  }
}
