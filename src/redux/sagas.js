import { all } from "redux-saga/effects";
import userSaga from "../redux/userSaga";

export default function* rootSagas() {
  yield all([userSaga()]);
}
