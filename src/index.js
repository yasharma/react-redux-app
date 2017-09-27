import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import App from './components/App';
import { reducers } from './reducers';

// #Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./stylesheets/main.css"; 

let users = [];
for (var i = 28; i >= 0; i--) {
  users.push({
    id: i,
    username: `John ${i}`,
    job: `Employee ${i}`
  })
}
const initial_state = {
	users: {
		list: users
	}
};


// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = applyMiddleware(routerMiddleware(history));

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(reducers, initial_state, middleware);

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
