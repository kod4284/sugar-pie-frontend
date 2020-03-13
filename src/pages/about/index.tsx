import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '@/pages/about/About';

function AboutPages({ match }: any) {
  return (
    <Switch>
      <Route path={`${match.url}`} component={About} />
    </Switch>
  );
}

export default AboutPages;
