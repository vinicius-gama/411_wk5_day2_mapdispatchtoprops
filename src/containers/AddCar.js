import { connect } from 'react-redux';
import { addCar } from './actions';
import AddCar from './AddCar';

const mapDispatchToProps = (dispatch) => {
  return {
    addCar: (car) => dispatch(addCar(car))
  };
};

export default connect(null, mapDispatchToProps)(AddCar);

  