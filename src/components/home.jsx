import React from 'react';
import { Link } from 'react-router-dom';
import CarsList from '../containers/cars_index';

const Home = () => {
  return (
    <div className="app">
      <div>
        <strong>Home</strong> | <Link to="about">About</Link>
      </div>
      <div>
        <CarsList />
      </div>
    </div>
  );
};

export default Home;
