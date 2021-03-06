import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch (action.type) {
    // case types.CREATE_COURSE:
    //   // debugger;
    //   return [...state, Object.assign({}, action.course)];
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    default:
      return state;
  }
}

const reducer = Object.assign({}, courseReducer);

export { reducer };
