import { call, put } from "redux-saga/effects"; //generator

import { SapirTypes } from "../User/types";
import { success, failure } from "../User/actions";

import { api } from "../../../providers/api";

//action
export const send_Contact = (data) => ({
  type: SapirTypes.SEND_CONTACT,
  payload: { data },
});

export function* Contact(action) {
  try {
    const response = yield call(
      api.post,
      "http://localhost:5000/auth/contact",
      action.payload.data
    );
    console.log("chegou no try do reducer");
  } catch (error) {
    yield put(failure(error));
  }
}
