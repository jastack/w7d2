import React from 'react';
import ReactDOM from 'react-dom';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form.jsx';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const {todos, deleteTodo, createTodo, updateTodo} = this.props;
    return (
      <div>
        <ul>
          {todos.map((todo, i) => <TodoListItem updateTodo={updateTodo} deleteTodo={deleteTodo} key={i} todo={todo}/>)}
        </ul>
        <TodoForm createTodo={createTodo}/>
        {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </div>
    );
  }
}

export default TodoList;
