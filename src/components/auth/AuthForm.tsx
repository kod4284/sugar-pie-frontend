import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import palette from '@/lib/styles/palette';
import Button from '@/components/common/Button';
import LocaleButton from '@/components/common/LocaleButton';

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  a {
    color: ${palette.gray[6]};
    white-space: nowrap;
    padding: 0px 0px;
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;


function AuthForm({ type }: { type: string }) {
  const { t } = useTranslation();

  return (
    <AuthFormBlock>
      <h3>{t(type)}</h3>
      <form>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder={t('username')}
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
        <ButtonWithMarginTop fullwidth="true">{t('login')}</ButtonWithMarginTop>
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
