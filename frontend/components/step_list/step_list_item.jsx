import React from 'react';


class StepListItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {id: this.props.id, body: this.props.body, title: this.props.title, boolean_field_name: this.props.boolean_field_name}
  }

  delete (e){
    e.preventDefault();
    this.props.removeStep(this.state);
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
    this.props.receiveStep(this.state);
  }

  render () {
    return (
      <div>
        <ul>
          <li>{this.props.title}</li>
          <li>{this.props.body}</li>
        </ul>
          <button onClick={this.delete.bind(this)}>Delete Step</button>
          <button onClick={this.changeStatus.bind(this)}>{this.displayStatus.bind(this)()}</button>
      </div>
    );
  }
}

export default StepListItem;
