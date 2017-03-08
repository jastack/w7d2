import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';


class TodoListItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {id: props.todo.id, body: props.todo.body, title: props.todo.title, boolean_field_name: props.todo.boolean_field_name, detail: false};
  }

  delete (id, e){
    e.preventDefault();
    this.props.deleteTodo(this.state);
  }

  displayStatus () {
    return this.state.boolean_field_name === true ? "Undo" : "Done";
  }

  changeStatus(e) {
    e.preventDefault();
    if (this.displayStatus() === "Undo") {
      this.setState({boolean_field_name: false});
    } else {
      this.setState({boolean_field_name: true});
    }
    this.props.updateTodo(this.state);
  }

  displayDetail(e) {
    let detail = (this.state.detail) ? false : true;
    this.setState({detail});
    this.props.updateTodo(this.state);
  }

  render() {
    return (
    <div>
      <li onClick={this.displayDetail.bind(this)}>{this.props.todo.title}</li>
      <button onClick={this.delete.bind(this, this.props.todo.id)}>Delete Item</button>
      <button onClick={this.changeStatus.bind(this)}>{this.displayStatus.bind(this)()}</button>
      <ul>
        <TodoDetailViewContainer todo={this.state}/>
      </ul>
    </div>
    )
  }
}

export default TodoListItem;
