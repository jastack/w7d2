import stepList from './step_list';
import { connect } from 'react-redux';
import { receiveStep } from '../../actions/step_actions';

const mapDispatchToProps = (dispatch) => ({
  receiveStep: step => dispatch(receiveStep(step))
});

export default connect(null, mapDispatchToProps)(stepList);
