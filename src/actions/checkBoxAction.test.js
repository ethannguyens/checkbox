import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './checkBoxAction';
import * as types from './actionTypes';
import intialState from '../reducers/initialState';
import sinon from 'sinon';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Checkbox actions', () => {
  it('should dispatch UPDATE_SELECTED_ITEMS action', () => {
    //Arrange
    const selectedItems = [0, 1];
    const store = mockStore(intialState);
    const expectedActions = [
      {
        type: types.UPDATED_SELECTED_ITEMS,
        selectedItems: [0, 1]
      }
    ];
    //Act
    store.dispatch(actions.updateSelectedItems(selectedItems));
    //Assert
    expect(store.getActions()).toEqual(expectedActions);
  });
});
