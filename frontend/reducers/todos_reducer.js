import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO} from '../actions/todo_actions.js';
import merge from 'lodash/merge';
import {allTodos} from './selectors';

const todosReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_TODOS:
      let newState = {};
      allTodos(action).forEach((todo) => {
        newState[todo.id] = todo;
      });
      return newState;
    case RECEIVE_TODO:
      newState = merge({}, state);
      newState[action.todo.id] = action.todo;
      return newState;
    case REMOVE_TODO:
      newState = merge({}, state);
      delete newState[action.todo.id];
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
