import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import users from './users';

export const reducers = combineReducers({
	users: users,
	routing: routerReducer
});