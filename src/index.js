import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';

import App from './App'
import allReducers from './redusers';
import './index.scss'


const store = createStore (allReducers, composeWithDevTools(applyMiddleware(thunk)))
axios.defaults.baseURL = 'http://localhost:8080/';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('root')
);
