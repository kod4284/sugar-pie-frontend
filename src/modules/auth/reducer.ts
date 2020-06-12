import { createReducer } from 'typesafe-actions';
import { produce } from 'immer';

import { State, AuthAction } from '@/modules/auth/types';
import {
  CHANGE_FIELD,
  INITIALIZE_FORM,
} from '@/modules/auth/actions';

export const initialState: State = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
  auth: null,
  authError: null,
};

const auth = createReducer<State, AuthAction>(initialState, {
  [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
    produce(state, (draft) => {
      if (form === 'auth' || form === 'authError') {
        return;
      }
      const assignedKey = initialState[form];
      draft[form][key as keyof typeof assignedKey] = value;
    }),
  [INITIALIZE_FORM]: (state, { payload: form }) => ({
    ...state,
    [form]: initialState[form],
    authError: null, // Note:  폼 전환시 인증 에러 초기화
  }),
});

export default auth;
