import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  changeField,
  initializeForm,
  RegisterForm,
  LoginForm as LoginFormType,
} from '@/modules/auth';
import AuthForm from '@/components/auth/AuthForm';
import { LoginInputs } from '@/components/auth/AuthForm.type';

interface Props {
  changeFieldConnect: Function,
  form: RegisterForm | LoginFormType
}

function LoginForm({ form }: Props) {
  const onSubmit = (data: LoginInputs) => {
    console.log(data);
  };

  useEffect(() => {
    initializeForm('login');
  }, []);

  return (
    <AuthForm
      type="login"
      form={form}
      onSubmit={onSubmit}
    />
  );
}

export default connect(
  (state: RegisterForm | LoginFormType) => ({
    form: state,
  }),
  {
    initializeFormConnect: initializeForm,
    changeFieldConnect: changeField,
  },
)(LoginForm);
