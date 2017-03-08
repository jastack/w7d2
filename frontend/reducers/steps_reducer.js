import {RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP} from '../actions/step_actions.js';
import merge from 'lodash/merge';

const stepsReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_STEPS:
      let newState = {};
      for (let idx in action.steps) {
        newState[action.steps[idx].id] = action.steps[idx];
      }
      return newState;
    case RECEIVE_STEP:
      newState = merge({}, state);
      newState[action.step.id] = action.step;
      return newState;
    case REMOVE_STEP:
      newState = merge({}, state);
      delete newState[action.step.id];
      return newState;
    default:
      return state;
  }
};

export default stepsReducer;
