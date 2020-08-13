import { call, put } from "redux-saga/effects"; //generator

import { api } from "../../../providers/api";
import { success, failure } from "./actions";

export function* Register(action) {
  try {
    const response = yield call(
      api.post,
      "http://localhost:5000/integrador",
      action.payload.data
    );
    console.log(response);
    console.log(response.headers);

    if (response.data && response.data.length) {
      yield put(success(response.data)); //if there is a user
    } else {
      yield put(failure(new Error("Tem parada errada ai mermão")));
    }
  } catch (error) {
    yield put(failure(error));
  }
}

export function* Login(action) {
  try {
    const response = yield call(
      //call api
      api.post,
      "http://localhost:5000/",
      action.payload.data
    );
    if (response.data && response.data.length) {
      yield put(success(response.data)); //if there is a user
    } else {
      yield put(failure(new Error("Tem parada errada ai mermão")));
    }
  } catch (error) {
    yield put(failure(error));
  }
}

export function* Forgot(action) {
  try {
    const response = yield call(
      api.post,
      "http://localhost:5000/auth/recover",
      action.payload.data
    );
  } catch (error) {
    yield put(failure(error));
  }
}
