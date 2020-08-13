import { SapirTypes } from './types';

//actions
export const register = (data) => ({
  type: SapirTypes.REQUEST,
  payload: { data }
})

export const success = (data) => ({
  type: SapirTypes.SUCCESS,
  payload: { data },
})

export const failure = (error) => ({
  type: SapirTypes.FAILURE,
  payload: { error },
})

export const login = (data) => ({
  type: SapirTypes.LOGIN,
  payload: { data },
})

export const forgot = (data) => ({
  type: SapirTypes.FORGOT,
  payload: { data }
})