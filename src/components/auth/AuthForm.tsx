import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import LocaleButton from '@/components/common/LocaleButton';
import { AuthFormProps } from '@/components/auth/AuthForm.type';
import {
  AuthFormBlock,
  StyledInput,
  ButtonWithMarginTop,
  Footer,
} from '@/components/auth/AuthForm.style';

function AuthForm({
  type,
  form,
  onChange,
  onSubmit,
}: AuthFormProps) {
  const { t } = useTranslation();
  return (
    <AuthFormBlock>
      <h3>{t(type)}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder={t('username')}
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder={t('password')}
          type="password"
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder={t('confirm.password')}
            type="password"
          />
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
