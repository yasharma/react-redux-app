import { call, put, takeLatest } from 'redux-saga/effects';
import ApiUsers from '../api/users';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
   
      const users = yield call(ApiUsers.getList);
      yield put({type: "users.fetchListSuccess", users: users});
   
}

function* mySaga(argument) {
	yield takeLatest("usersFetchList", fetchUser);
}

export default mySaga;