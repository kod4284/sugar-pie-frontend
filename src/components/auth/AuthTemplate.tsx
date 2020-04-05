import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '@/lib/styles/palette';
import { useTranslation } from 'react-i18next';

interface AuthTemplateProps {
  children: React.ReactNode
}

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
    a {
      color: black;
      
    }
    a:hover {
      color: ${props => props.theme.primaryColor};
      transition: color 0.3s;
    }
  }
  box-shadow: 0 0 8px rgba(0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`;

function AuthTemplate({ children }: AuthTemplateProps) {
  const { t } = useTranslation();
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">{t('main.title')}</Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
}

export default AuthTemplate;
