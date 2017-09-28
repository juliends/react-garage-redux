import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import Home from './components/home';
// import About from './components/about';
import CarsNew from './containers/cars_new';

// Reducers
import carsReducer from './reducers/cars_reducer';
import { reducer as formReducer } from 'redux-form';
import '../assets/stylesheets/application.scss';

// const initialState = {
//   cars: [
//     { id: 1, brand: 'Peugeot', model: '106', owner: 'John', plate: 'WOB-ED-42' },
//     { id: 2, brand: 'Renault', model: 'Scenic', owner: 'Paul', plate: 'AAA-12-BC' },
//     { id: 3, brand: 'Aston Martin', model: 'DB Mark III', owner: 'James', plate: '418-ED-94' },
//     { id: 4, brand: 'VW', model: 'Beetle', owner: 'George', plate: '1234-XD-75' }
//   ]
// };

const reducers = combineReducers({
  cars: carsReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {cars: [], garage: 'my-awesome-garage'}, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/new" exact component={CarsNew} />
      </Switch>
    </Router>
  </Provider>,
  document.querySelector('.container')
);
