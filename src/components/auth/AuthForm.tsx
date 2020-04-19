/* eslint-disable react/style-prop-object */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

import LocaleButton from '@/components/common/LocaleButton';
import { AuthFormProps } from '@/components/auth/AuthForm.type';
import {
  AuthFormBlock,
  StyledInput,
  ButtonWithMarginTop,
  Footer,
} from '@/components/auth/AuthForm.style';

interface Inputs {
  username: string,
  password: string,
  passwordConfirm: string,
}

function AuthForm({ type, form, onSubmit }: AuthFormProps) {
  const { t } = useTranslation();
  const { register, handleSubmit, errors } = useForm<Inputs>();
  return (
    <AuthFormBlock>
      <h3>{t(type)}</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder={t('username')}
          value={form.username}
          ref={register({ required: true })}
        />
        {errors.username && <span>{t('username.required')}</span>}
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder={t('password')}
          type="password"
          ref={register({ required: true })}
        />
        {errors.password && <span>{t('password.required')}</span>}
        {type === 'register' && (
          <>
            <StyledInput
              autoComplete="new-password"
              name="passwordConfirm"
              placeholder={t('confirm.password')}
              type="password"
              ref={register({ required: true })}
            />
            {errors.passwordConfirm && (
              <span>{t('password.confirm.required')}</span>
            )}
          </>
        )}
        <ButtonWithMarginTop htmlType="submit" fullwidth="true">
          {t('login')}
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type === 'login' ? (
          <div>
            <LocaleButton style={{ borderRadius: '1rem' }} />
            <Link
              style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}
              to="/register"
            >
              {t('register')}
            </Link>
          </div>
        ) : (
          <Link to="/login">{t('login')}</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
}

export default AuthForm;
