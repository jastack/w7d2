import { connect } from 'react-redux';
import TodoList from './todo_list';
import {allTodos} from '../../reducers/selectors';
import { deleteTodo, fetchTodos, createTodo, updateTodo } from '../../actions/todo_actions';


const mapStateToProps = (state) => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  createTodo: todo => (dispatch(createTodo(todo))),
  updateTodo: todo => (dispatch(updateTodo(todo))),
  deleteTodo: todos => (dispatch(deleteTodo(todos))),
  fetchTodos: () => dispatch(fetchTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
