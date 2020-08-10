import { all, takeLatest } from 'redux-saga/effects'; //generators

import { Register, SapirTypes } from './ducks/Sapir';

export function* root(){
  yield all([
    takeLatest(SapirTypes.REQUEST, Register)
  ])
}