import checkBoxReducer from './checkBoxReducer';
import * as types from '../actions/actionTypes';
import initialStates from './initialState';
import expect from "expect";


describe('CheckBox Reducers', () => {
  it('should return the initial state', () => {
    //Arrange
    const expectedState = initialStates.checkBox;
    //Act
    const actualState = checkBoxReducer(undefined, {});
    //Assert
    expect(actualState).toBe(expectedState);
  });

  it('should return new state with updateSelectedItems for UPDATE_SELECTED_ITEMS', () => {
    //Arrange
    const selectedItems = [0, 1];
    const action = {type: types.UPDATED_SELECTED_ITEMS, selectedItems: selectedItems};
    const expectedState = Object.assign({}, initialStates.checkBox, {selectedItems: selectedItems});
    //Act
    const actualState = checkBoxReducer(undefined, action);
    //Assert
    expect(actualState).toEqual(expectedState);
  });
});
