import { createAction } from 'typesafe-actions';
import { FormField, State } from '@/modules/auth/types';

export const CHANGE_FIELD = 'auth/CHANGE_FIELD';
export const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }: FormField) => ({
    form,
    key,
    value,
  }),
)<FormField>();

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form)
<keyof State>();
