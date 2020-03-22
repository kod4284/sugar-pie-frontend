import React from 'react';
import { Route, Switch, RouteChildrenProps } from 'react-router-dom';
import Counter from '@/pages/counter/Counter';

function AboutPages({ match }: RouteChildrenProps) {
  return match && (
    <Switch>
      <Route path={`${match.url}`} component={Counter} />
    </Switch>
  );
}

export default AboutPages;
