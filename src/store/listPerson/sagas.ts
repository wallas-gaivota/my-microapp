import { call, all, takeLatest, put, select } from "redux-saga/effects";
import api from "services/api";
import { listPersonActions } from ".";
import { PersonApi } from "services/api/PersonApi";
import { RootState } from "../index";

function* getListPerson() {
  try {
    const { offset, perPage } = yield select((state: RootState) => state.listPersonReducer.meta);
    const response = yield call(api.get, PersonApi.getListPerson(perPage, offset));

    yield put(listPersonActions.success(response.data.data));
  } catch (error) {
    yield put(listPersonActions.failure());

    console.error(error);
  }
}

// When the getAddressByCepRequest is called the saga middleware will take action
export const sagaListPerson = all([takeLatest(listPersonActions.request, getListPerson)]);
