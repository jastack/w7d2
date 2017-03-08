import React from 'react';
import StepListItemContainers from './step_list_item_container';
import StepForm from './step_form';

class StepList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { receiveStep } = this.props;
    return (
      <ul>
        <StepListItemContainers />
        <StepForm receiveStep={receiveStep}/>
      </ul>
    );
  }
}

export default StepList;
