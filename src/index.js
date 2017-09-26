import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import App from './components/App';
import { reducers } from './reducers';
import saga from './sagas';

// #Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './stylesheets/main.css'; 


// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = applyMiddleware(routerMiddleware(history), sagaMiddleware);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(reducers, middleware);

// then run the saga
sagaMiddleware.run(saga)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
	<Provider store={store}>
		{ /* ConnectedRouter will use the store from Provider automatically */ }
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>	
	</Provider>,
	document.getElementById('root')
);
