import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import { removeCar } from '../actions'; // Import the removeCar action here

const mapStateToProps = (state) => {
  return {
    user: state.user,
    cars: state.cars
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeCar: (carId) => dispatch(removeCar(carId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
