import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {initReactIntl} from './i18n';
import {IntlProvider} from 'react-intl';

const {locale, messages} = initReactIntl();
ReactDOM.render(
  <React.StrictMode>
  <IntlProvider locale={locale} messages={messages}>
    <App />
        </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


