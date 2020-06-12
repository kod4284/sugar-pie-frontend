import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import auth from '@/modules/auth/reducer';
import loading from '@/modules/loading';

import { authSaga } from '@/modules/auth/sagas';

const rootReducer = combineReducers({
  auth,
  loading,
});

export function* rootSaga() {
  yield all([authSaga()]);
}

export default rootReducer;
