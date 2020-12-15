import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }  from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/Index';
import App from './App';
import './index.css';
import * as Const from './const/const';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
document.title = Const.TITLE;
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

