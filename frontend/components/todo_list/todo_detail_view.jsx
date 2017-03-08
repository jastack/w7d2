import React from 'react';
import ReactDOM from 'react-dom';
import StepListContainer from '../step_list/step_list_container';
import { stepsByTodoId } from '../../reducers/selectors';

const TodoDetailView = ({todo, steps, removeTodo}) => {
  if (todo.detail) {
    return (
      <div>
        <li>{todo.body}</li>
          <StepListContainer steps={stepsByTodoId(steps, todo.id)}/>
      </div>
    );
  } else {
    return null;
  }
};

export default TodoDetailView;
