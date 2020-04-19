import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  changeField,
  initializeForm,
  RegisterForm as RegisterFormType,
  LoginForm as LoginFormType,
} from '@/modules/auth';
import AuthForm from '@/components/auth/AuthForm';
import { RegisterInputs } from '@/components/auth/AuthForm.type';

interface Props {
  changeFieldConnect: Function,
  form: RegisterFormType | LoginFormType
}

function RegisterForm({ form }: Props) {
  const onSubmit = (data: RegisterInputs) => {
    console.log(data);
  };

  useEffect(() => {
    initializeForm('register');
  }, []);

  return (
    <AuthForm
      type="register"
      form={form}
      onSubmit={onSubmit}
    />
  );
}

export default connect(
  (state: RegisterFormType | LoginFormType) => ({
    form: state,
  }),
  {
    initializeFormConnect: initializeForm,
    changeFieldConnect: changeField,
  },
)(RegisterForm);
