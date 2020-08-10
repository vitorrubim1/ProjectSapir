import { combineReducers } from 'redux';

import { SapirReducer } from './ducks/Sapir';

export const reducers = combineReducers({
  reducerSapir: SapirReducer,
});

export { root } from './sagas';