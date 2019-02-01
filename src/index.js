import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import rootReducer from './Reducers/rootreducer';
import './index.css';
import Layout from './LayoutComponent.js';
import { createStore, applyMiddleware } from 'redux';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store = {store}>
                    <Layout />
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
