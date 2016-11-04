import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from 'reducers';

import 'sanitize.css/sanitize.css';
import './global-styles';

import Gallery from 'containers/Gallery';


const store = createStore(reducers, compose(
  applyMiddleware(promiseMiddleware()),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

ReactDOM.render(
  <Provider store={store}>
    <Gallery />
  </Provider>, 
  document.querySelector('#app'));