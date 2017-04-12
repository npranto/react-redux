import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import reducers from './app/reducers';

import {RootRoute} from './app/routes/Root.route.js';
import './style.css';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	<Router>
 		{RootRoute}
   	</Router>
  </Provider>
  , document.querySelector('.container'));
