import { combineReducers } from 'redux';
import counter, { counterSaga } from '@/modules/counter';
import { all } from 'redux-saga/effects';
import sample, { sampleSaga } from '@/modules/sample';
import loading from '@/modules/loading';

const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});

export function* rootSaga() {
  yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;
