import { takeLatest } from 'redux-saga/effects';

import createRequestSaga from '@/lib/createRequestSaga';
import { register, login } from '@/lib/api/auth';

import { REGISTER, LOGIN } from './actions';

export const registerSaga = createRequestSaga(REGISTER, register);

export const loginSaga = createRequestSaga(LOGIN, login);

export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}
