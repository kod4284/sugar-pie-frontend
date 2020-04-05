import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from '@/pages/LoginPage'
import PostListPage from '@/pages/PostListPage';
import PostPage from '@/pages/PostPage';
import RegisterPage from '@/pages/RegisterPage';
import WritePage from '@/pages/WritePage';

function App() {
  return (
    <>
      <Switch>
        <Route component={LoginPage} exact path="/login" />
        <Route component={PostListPage} exact path={['/@:username', '/']} />
        <Route component={PostPage} exact path="/@:username/:postId" />
        <Route component={RegisterPage} exact path="/register" />
        <Route component={WritePage} exact path="/write" />
      </Switch>
    </>
  );
}

export default App;
