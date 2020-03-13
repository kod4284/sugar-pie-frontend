import React from 'react';
import { Test as t } from '@/common/type';

function Test({ test }: t) {
  return (
    <div className="test">
      {test}
    </div>
  );
}

export default Test;
