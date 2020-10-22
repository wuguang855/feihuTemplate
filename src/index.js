import dva from 'dva'
import React from 'react'
import ReactDOM from 'react-dom'
import { I18nextProvider }  from 'react-i18next'

import './index.css';
import 'tea-component/lib/tea.css';
import Vconsole from 'vconsole';
import i18n from './i18n/index';
// import { createBrowserHistory } from 'history';
// const history = createBrowserHistory({
//   basename: '/base-path'
// });

// 1. Initialize
const app = dva({
  //history: history
});
// 2. Plugins
// app.use({});

// 引入v-console
if (process.env.NODE_ENV === 'development') {
  new Vconsole();
}

// 3. Model
require('./models').default.forEach(key => {
  app.model(key.default);
});
// 4. Router
app.router(require('./router').default);

// 5. Start
const App = app.start()
ReactDOM.render(<I18nextProvider i18n={i18n}> <App /></I18nextProvider>,  document.getElementById('root'))
