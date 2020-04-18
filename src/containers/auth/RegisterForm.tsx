import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  changeField,
  initializeForm,
  RegisterForm as RegisterFormType,
  LoginForm as LoginFormType,
} from '@/modules/auth';
import AuthForm from '@/components/auth/AuthForm';

interface Props {
  changeFieldConnect: Function,
  form: RegisterFormType | LoginFormType
}

function RegisterForm({ changeFieldConnect, form }: Props) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    changeFieldConnect({
      form: 'register',
      key: name,
      value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    initializeForm('register');
  }, []);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
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
