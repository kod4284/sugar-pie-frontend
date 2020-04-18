import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  changeField,
  initializeForm,
  RegisterForm,
  LoginForm as LoginFormType,
} from '@/modules/auth';
import AuthForm from '@/components/auth/AuthForm';

interface Props {
  changeFieldConnect: Function,
  form: RegisterForm | LoginFormType
}

function LoginForm({ changeFieldConnect, form }: Props) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    changeFieldConnect({
      form: 'login',
      key: name,
      value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    initializeForm('login');
  }, []);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
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
