import React, { lazy } from 'react';
import { Router, Route, Switch, IndexRoute } from 'dva/router';
import withSuspense from './components/withSuspense';

//同步加载
import IndexPage from './pages/Index';
import P1 from './pages/P1';
import P2 from './pages/P2';
//按需加载
// const IndexPage = withSuspense(lazy(() => import('./pages/Index')));
// const P1 = withSuspense(lazy(() => import('./pages/P1')));
// const P2 = withSuspense(lazy(() => import('./pages/P2')));

function RouterConfig({ history }) {

  return (
    <Router history={history}>
      <Switch>
        <Route component={IndexPage} exact path="/" />
        <Route component={P1} path="/p1">
          <Route component={P2} path="p2" />
        </Route>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
