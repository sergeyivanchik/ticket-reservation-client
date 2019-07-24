import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';

import App from './App'
import allReducers from './redusers';
import { StripeProvider } from 'react-stripe-elements';
import { stripePublishablekey } from './configs/payment';
import { baseUrl } from './configs/url';
import './index.scss';
import socketConfig from './socket';


const store = createStore (allReducers, composeWithDevTools(applyMiddleware(thunk)))
axios.defaults.baseURL = baseUrl;
socketConfig(store.dispatch);

ReactDOM.render(
  <StripeProvider apiKey={stripePublishablekey}>
    <Provider store={store}>
      <App/>
    </Provider>
  </StripeProvider>, 
  document.getElementById('root')
);
