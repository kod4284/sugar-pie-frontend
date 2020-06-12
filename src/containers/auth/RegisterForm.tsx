import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  changeField,
  initializeForm,
  register,
  RegisterForm as RegisterFormType,
  LoginForm as LoginFormType,
} from '@/modules/auth';
import AuthForm from '@/components/auth/AuthForm';
import { RegisterInputs } from '@/components/auth/AuthForm.type';

interface Props {
  changeFieldConnect: Function,
  form: RegisterFormType | LoginFormType
}

function RegisterForm({ initializeFormConnect, registerConnect }: any) {
  const onSubmit = (data: RegisterInputs) => {
    console.log(data);
    registerConnect({
      username: data.username,
      password: data.password,
    });
  };

  useEffect(() => {
    initializeFormConnect('register');
  }, [initializeFormConnect]);

  return (
    <AuthForm
      type="register"
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
    registerConnect: register,
  },
)(RegisterForm);
