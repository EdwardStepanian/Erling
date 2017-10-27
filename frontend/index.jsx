import React from 'react';
import { render } from 'react-dom';
import { renderToString } from 'react-dom/server';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import testmiddleware from './middlewares/testmiddleware';
import promise from 'redux-promise';

import reduxReset from 'redux-reset';
import reducers from './reducers/reducers';

import App from './components/app/app';

const Middlewares = [
    thunk,
    promise,
    testmiddleware
];

if( typeof  window !== 'undefined' && typeof document !== 'undefined' && typeof document.createElement ===
'function' ){
    window.renderClient = (state) => {
        let store = applyMiddleware(...Middlewares)(createStore)(reducers, state, reduxReset)
    }

}