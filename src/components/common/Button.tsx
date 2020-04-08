import React from 'react';
import styled, { css } from 'styled-components';
import { Button as AntdButton } from 'antd';

const StyledButton = styled<any>(AntdButton)`
  border-radius: 4px;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.25rem 1rem;
  color: white;

  ${props => props.fullWidth
    && css`
      padding-top: 0.75rem;
      padding-bottom: 2.2rem;
      width: 100%;
      font-size: 1.125rem;
    `}
`;


function Button(props: any) {
  return (
    <div>
      <StyledButton type="primary" {...props} />
    </div>
  )
}

export default Button;
