import React from 'react';
import { CounterProps } from '@/common/type';

function Counter({ onIncrease, onDecrease, number }: CounterProps) {
  return (
    <div>
      <h1>{number}</h1>
      <button type="button" onClick={onIncrease}>+</button>
      <button type="button" onClick={onDecrease}>-</button>
    </div>
  );
}

export default Counter;