import todosReducer from './todos_reducer.js';
import stepsReducer from './steps_reducer.js';
import { combineReducers } from 'redux';
import errorReducer from './error_reducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  steps: stepsReducer,
  errors: errorReducer
});

export default rootReducer;
