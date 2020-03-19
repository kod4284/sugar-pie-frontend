import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '@/modules/counter';
import Counter from '@/components/Counter';
import { CounterContainerProps, State } from '@/common/type';

function CounterContainer({
  number,
  increaseConnect,
  decreaseConnect,
}: CounterContainerProps) {
  return (
    <Counter
      number={number}
      onIncrease={increaseConnect}
      onDecrease={decreaseConnect}
    />
  );
}

export default connect(
  (state: State) => ({
    number: state.counter,
  }),
  {
    increaseConnect: increase,
    decreaseConnect: decrease,
  },
)(CounterContainer);
