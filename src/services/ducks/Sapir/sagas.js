import { call, put } from 'redux-saga/effects'; //generator

import api from '../../../providers/api';
import { success, failure } from './actions';

export function* User(action){
  try{
    const response = yield call( //call api
      api.get,
      "url da api"
    );

    if(response.data && response.data.length){
      yield put(success(response.data)) //if there is a user 
    } else {
      yield put(failure(new Error ("Tem parada errada ai mermão")));
    }
  } catch (error){
    yield put(failure(error));
  }
}