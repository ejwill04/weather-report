import { connect } from 'react-redux';
import { addCity } from '../actions';

const mapStateToProps = (state) => {
  return { weather: state.cities };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCity: (data) => {
      dispatch(addCity(data));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
