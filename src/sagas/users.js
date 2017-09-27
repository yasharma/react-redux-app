import { call, put } from 'redux-saga/effects';
import ApiUsers from '../api/users';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export function* fetchUser(action) {
	console.log('okkkkkkkkkk');
	const users = yield call(ApiUsers.getList);
	console.log(users);
	yield put({type: "users.fetchListSuccess", users: users});
}