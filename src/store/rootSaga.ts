import { all } from "redux-saga/effects";
import { sagaListPerson } from "./listPerson/sagas";

export default function* rootSaga() {
  yield all([sagaListPerson]);
}
