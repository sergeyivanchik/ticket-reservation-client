import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createStore, applyMiddleware } from 'redux';
import allReducers from './redusers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'


const store = createStore (allReducers, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);

