import { all, takeLatest } from 'redux-saga/effects'; //generators

import { Register, SapirTypes, Contact } from './ducks/Sapir';

export function* root(){
  yield all([
    takeLatest(SapirTypes.REQUEST, Register),
    takeLatest(SapirTypes.SEND_CONTACT, Contact)
  ])
}