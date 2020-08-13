import { SapirTypes } from './types';

//actions
export const request = (data) => ({
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

export const send_Contact = (data) => ({
  type: SapirTypes.SEND_CONTACT,
  payload: { data }
})

export const forgot = (data) => ({
  type: SapirTypes.FORGOT,
  payload: { data }
})