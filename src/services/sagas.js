import { all, takeLatest } from 'redux-saga/effects'; //generators

import { Register, SapirTypes, Contact } from './ducks/User';

export function* root(){
  yield all([
    takeLatest(SapirTypes.REQUEST, Register),
    takeLatest(SapirTypes.SEND_CONTACT, Contact)
  ])
}