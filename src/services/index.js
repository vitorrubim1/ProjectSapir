import { combineReducers } from 'redux';

import { SapirReducer } from './ducks/User';

export const reducers = combineReducers({
  reducerSapir: SapirReducer,
});

export { root } from './sagas';