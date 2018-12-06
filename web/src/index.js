import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom'

import ProjectManager from './screens/ProjectManager';
import DrupalDeveloper from './screens/DrupalDeveloper';
import PhpDeveloper from './screens/PhpDeveloper';
import ReactDeveloper from './screens/ReactDeveloper';

ReactDOM.render((
  <HashRouter>
    <App>
      <Switch>
        <Redirect exact from="/" to="/projekleder" />
        <Route path="/projektleder" component={ProjectManager} />
        <Route path="/drupal-udvikler" component={DrupalDeveloper} />
        <Route path="/php-udvikler" component={PhpDeveloper} />
        <Route path="/react-udvikler" component={ReactDeveloper} />
      </Switch>
    </App>
  </HashRouter>
), document.getElementById('root'));
registerServiceWorker();
