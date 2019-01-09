import { combineReducers } from 'redux';
import { reducer as courseReducer } from './CourseReducer';

const rootReducer = combineReducers({ courseReducer });

export default rootReducer;
