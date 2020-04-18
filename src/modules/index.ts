import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import auth from '@/modules/auth/reducer';
import counter, { counterSaga } from '@/modules/counter';
import sample, { sampleSaga } from '@/modules/sample';
import loading from '@/modules/loading';

const rootReducer = combineReducers({
  auth,
  counter,
  sample,
  loading,
});

export function* rootSaga() {
  yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;
