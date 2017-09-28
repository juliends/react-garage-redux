import React, { Component } from 'react';

// Redux config
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCars } from '../actions';

// Components
import Car from '../components/car';

class CarsIndex extends Component {
  render() {
    const cars = this.props.cars;
    return (
      <div className="">
        {cars.map(car => <Car key={car.plate} car={car} />)}
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
    { fetchCars },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
