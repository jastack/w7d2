import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {boolean_field_name: false, title: "", body: "", detail: false};
  }

  updateTitle(e) {
    e.preventDefault();
    let title = e.target.value;
    this.setState({title});
  }

  updateBody(e) {
    e.preventDefault();
    let body = e.target.value;
    this.setState({body});
  }

  createTodo (e){
    e.preventDefault();
    this.props.createTodo(this.state).then(
      () => this.setState({title: "", body: ""})
    );
  }

  render() {
    return (
      <div>
        <input onChange={this.updateTitle.bind(this)} type="text" value={this.state.title}/>
        <textarea onChange={this.updateBody.bind(this)} value={this.state.body}/>
        <button onClick={this.createTodo.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default TodoForm;
