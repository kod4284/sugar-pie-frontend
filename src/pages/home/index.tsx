import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '@/pages/home/Home';

function About({ match }: any) {
  return (
    <Switch>
      <Route path={`${match.url}`} component={Home} />
    </Switch>
  );
}

export default About;
