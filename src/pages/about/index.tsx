import React from 'react';
import { Route, Switch, RouteChildrenProps } from 'react-router-dom';
import About from '@/pages/about/About';

function AboutPages({ match }: RouteChildrenProps) {
  return match && (
    <Switch>
      <Route path={`${match.url}`} component={About} />
    </Switch>
  );
}

export default AboutPages;
