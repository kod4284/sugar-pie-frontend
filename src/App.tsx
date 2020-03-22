import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Counter from '@/pages/counter';
import Home from '@/pages/home';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={['/', '/home']} component={Home} />
        <Route exact path="/counter" component={Counter} />
      </Switch>
    </div>
  );
}

export default App;
