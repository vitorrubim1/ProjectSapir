import { call, put } from "redux-saga/effects"; //generator

import { api } from "../../../providers/api";
import { success, failure, request, send_Contact } from "./actions";

export function* Register(action) {
  try {
    const response = yield call(
      api.post,
      "http://localhost:5000/integrador",
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

export function* Login(action) {
  try {
    const response = yield call(
      //call api
      api.post,
      "http://localhost:5000/integrador",
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

export function* Contact(action) {
  try {
    const response = yield call(
      api.post,
      "http://localhost:5000/auth/contact",
      action.payload.data
    );
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