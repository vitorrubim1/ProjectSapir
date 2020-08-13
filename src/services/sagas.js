import { all, takeLatest } from 'redux-saga/effects'; //generators

import { Register, SapirTypes } from './ducks/User';
import { Contact } from './ducks/Contact';

export function* root(){
  yield all([
    takeLatest(SapirTypes.REQUEST, Register),
    takeLatest(SapirTypes.SEND_CONTACT, Contact)
  ])
}