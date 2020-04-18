import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface RegisterForm {
  username: string,
  password: string,
  passwordConfirm: string,
}

export interface LoginForm {
  username: string,
  password: string
}

export interface State {
  register: RegisterForm,
  login: LoginForm
}

export interface FormField {
  form: keyof State,
  key: string,
  value: string
}

export type AuthAction = ActionType<typeof actions>;
