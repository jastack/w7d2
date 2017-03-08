import React from 'react';
import uniqueId from '../../util/unique_id';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {boolean_field_name: false, title: "", body: "", id: uniqueId()};
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

  createStep (e){
    e.preventDefault();
    this.props.receiveStep(this.state);
    this.setState({title: "", body: ""});
  }

  render() {
    return (
      <div>
        <input onChange={this.updateTitle.bind(this)} type="text" value={this.state.title}/>
        <textarea onChange={this.updateBody.bind(this)} value={this.state.body}/>
        <button onClick={this.createStep.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default StepForm;
