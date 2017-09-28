import React from 'react';
import { Link } from 'react-router-dom';
import CarsList from '../containers/cars_index';

const Home = () => {
  return (
    <div className="app">
      <div>
        <strong>My garage</strong> | <Link to="new">Add your car</Link>
      </div>
      <hr />
      <div>
        <CarsList />
      </div>
    </div>
  );
};

export default Home;
