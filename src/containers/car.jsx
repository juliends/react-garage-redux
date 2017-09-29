import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteCar, fetchCars } from '../actions';

class Car extends Component {

  handleClick = () => {
    this.props.deleteCar(this.props.car.id, this.props.fetchCars);
  }

  render() {
    const car = this.props.car;
    return (
      <div className="">
        <p><strong>{car.brand}</strong></p>
        <p>{car.owner}</p>
        <p>{car.model}</p>
        <p>{car.plate}</p>
        <button className='btn btn-danger' onClick={this.handleClick}>Delete Me</button>
        <hr />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { deleteCar, fetchCars },
    dispatch
  );
}

export default connect( null, mapDispatchToProps)(Car);

