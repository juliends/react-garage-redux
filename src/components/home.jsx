import React from 'react';
import { Link } from 'react-router-dom';
import CarsList from '../containers/cars_index';
import CarsNew from '../containers/cars_new';

const Home = () => {
  return (
    <div className="app">
      <div>
        <strong>Wagon garage</strong> | <Link to="new">Add your car</Link>
      </div>
      <hr />
      <div>
        <CarsList />
      </div>
      <hr />
      <CarsNew />
    </div>
  );
};

export default Home;
