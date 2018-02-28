import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import CheckBox from './CheckBox';
import initialStates from '../../reducers/initialState';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

function setup() {
  const props = initialStates.instaFlickr;
  const selectedItems  = [0, 1];
  let mockState = Object.assign({}, initialStates, {checkBox: {
    items: ["One", "Two", "Three"],
    selectedItems: selectedItems
  }});
  const createStore = (state = mockState) => {
    const middleWares = [];
    const mockStore = configureStore(middleWares);
    return mockStore(state);
  };
  const store = createStore();

  const wrapper = mount(<Provider store={store}><CheckBox/></Provider>);
  return {
    props,
    wrapper
  };
}

describe('CheckBox Component', () => {
  it('should render itself', () => {
    // Arrange & Act
    const {wrapper} = setup();
    // Assert
    expect(wrapper.find('CheckBox').hasClass('CheckBox')).toBe(true);
  });
});
