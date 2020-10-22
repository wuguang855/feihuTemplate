import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
  //同步加载
  import IndexPage from './pages/Index';
  import P1 from './pages/P1';

function RouterConfig({ history, app }) {

  //按需加载
  const P2 = dynamic({
    app,
    models: () => [
      //按需加载models
      //import('./models/some modle'),
    ],
    component: () => import('./pages/P2')
  });

  return (
    <Router history={history}>
      <Switch>
        <Route component={IndexPage} exact path="/" />
        <Route component={P1} path="/p1" />
        <Route component={P2} path="/p2" />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
