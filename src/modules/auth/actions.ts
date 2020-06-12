import { createAction } from 'typesafe-actions';

import { FormField, State, LoginForm } from '@/modules/auth/types';

export const CHANGE_FIELD = 'auth/CHANGE_FIELD';
export const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

export const REGISTER = 'auth/REGISTER';
export const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';

export const LOGIN = 'auth/LOGIN';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }: FormField) => ({
    form,
    key,
    value,
  }),
)<FormField>();

export const initializeForm = createAction(
  INITIALIZE_FORM,
  (form: keyof State) => form,
)<keyof State>();

export const register = createAction(
  REGISTER,
  ({ username, password }: LoginForm) => ({
    username,
    password,
  }),
)<LoginForm>();

export const login = createAction(
  LOGIN,
  ({ username, password }: LoginForm) => ({
    username,
    password,
  }),
)<LoginForm>();
