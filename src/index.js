import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

import App from './components/App';
import { reducers } from './reducers/index';

// #Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './stylesheets/main.css'; 

let users = [];
for (var i = 10; i >= 0; i--) {
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
const browserHistory = createBrowserHistory();
let middleware = applyMiddleware(routerMiddleware(browserHistory));
const store = createStore(reducers, initial_state, middleware);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>	
	</Provider>,
	document.getElementById('root')
);
