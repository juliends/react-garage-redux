import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { createCar } from '../actions';
import { Link } from 'react-router-dom';

// Components
class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(values, () => {
      this.props.history.push('/');
    });
  }
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Add a new Car</h1>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field label="Brand" name="brand" type="text" component={this.renderField} />
          <Field label="Owner" name="owner" type="text" component={this.renderField} />
          <Field label="Model" name="model" type="text" component={this.renderField} />
          <Field label="Plate" name="plate" type="text" component={this.renderField} />

          <button className="btn btn-primary" type="submit" disabled={this.props.pristine || this.props.submitting}>
            Add Car
          </button>
        </form>
        <hr />
        <Link to="/">Go back</Link>
      </div>
    );
  }
}

export default reduxForm({
  form: 'newCarForm' // a unique identifier
})(
  connect(null, { createCar })(CarsNew)
);
