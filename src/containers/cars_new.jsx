import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

// Redux config
import { connect } from 'react-redux';
import { createCar } from '../actions';

// Components
class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }
  renderField (field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type={field.type} />
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Add a new Car</h1>
        <form>
          <Field label="Brand" name="title" type="text" component={this.renderField} />
          <Field label="Owner" name="title" type="text" component={this.renderField} />
          <Field label="Model" name="title" type="text" component={this.renderField} />
          <Field label="Plate" name="title" type="text" component={this.renderField} />

          <button className="btn btn-primary" type="submit"
            >
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
