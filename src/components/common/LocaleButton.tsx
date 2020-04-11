import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button as AntdButton } from 'antd';
import { useTranslation } from 'react-i18next';
import { i18n as i18nTypes } from 'i18next';

import palette from '@/lib/styles/palette';

const StyledButton = styled(AntdButton)`
  font-weight: bold;
  color: ${palette.gray[6]};
`;

const findNextLocale = (i18n: i18nTypes, locales: Array<string>) => {
  const currentLanguage = i18n.language;
  const index = locales.findIndex((e: string) => e !== currentLanguage);
  return locales[index];
};

function Button(props: any) {
  const { t, i18n } = useTranslation();
  const [locales, setLocale] = useState(['en']);

  useEffect(() => {
    setLocale(Object.keys(i18n.options.resources as Object) as Array<string>);
  }, [i18n.options.resources]);

  const nextLocale = findNextLocale(i18n, locales);

  return (
    <div>
      <StyledButton onClick={() => i18n.changeLanguage(nextLocale)} {...props}>
        {t(nextLocale)}
      </StyledButton>
    </div>
  );
}

export default Button;
