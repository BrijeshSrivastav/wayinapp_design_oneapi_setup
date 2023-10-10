import { takeEvery, put ,call} from 'redux-saga/effects'
import { ActionTypes } from "../redux/constants/action-types";
import { setUserList,errorUserList} from './useraction';
import axios from 'axios';

function* getAllUser(action) {
  yield axios.get('http://leadadmin.appsfiber.com/adminapi/manage_admin_users.php');
}


function* fetchUser(action) {
  try {
    const user = yield axios.get('http://leadadmin.appsfiber.com/adminapi/manage_admin_users.php');;
    yield put(setUserList(user))
  } catch (e) {
    yield put(errorUserList(e.message))
  }
}



function* userSaga() {
    yield takeEvery(ActionTypes.GET_USER_LIST, fetchUser)
    //yield takeEvery(SEARCH_PRODUCT, searchProducts)

}

export default userSaga;