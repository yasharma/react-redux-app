import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import users from './users';

export const reducers = combineReducers({
	users: users,
	routing: routerReducer,
	form: formReducer
});