import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

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
	users: users
};



const store = createStore(reducers, initial_state);
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
