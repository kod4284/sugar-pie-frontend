import React from 'react';
import styled from 'styled-components';
import palette from '@/lib/styles/palette';
import { Button as AntdButton } from 'antd';

const StyledButton = styled(AntdButton)`
  border-radius: 4px;
  font-weight: bold;
`;

function Button(props: any) {
  return (
    <div>
      <StyledButton {...props} />
    </div>
  )
}

export default Button;
