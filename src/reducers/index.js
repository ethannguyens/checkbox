import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import checkBox from './checkBoxReducer';


const rootReducer = combineReducers({
  ajaxCallsInProgress,
  checkBox
});

export default rootReducer;
