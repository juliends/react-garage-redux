import React, { Component } from 'react';

// Redux config
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createCar } from '../actions';

// Components
import Car from '../components/car';

class CarsNew extends Component {
  handleSubmit = (event) => {
    this.props.createCar;
  };

  render() {
    return (
      <div className="" onClick={this.handleSubmit}>
        Create a fake Car
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createCar },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsNew);
