import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

import ProjectManager from './screens/ProjectManager';
import DrupalDeveloper from './screens/DrupalDeveloper';
import PhpDeveloper from './screens/PhpDeveloper';

ReactDOM.render((
  <Router>
    <App>
      <Switch>
        <Redirect exact from="/" to="/projektleder" />
        <Route path="/projektleder" component={ProjectManager} />
        <Route path="/drupal-udvikler" component={DrupalDeveloper} />
        <Route path="/php-udvikler" component={PhpDeveloper} />
      </Switch>
    </App>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
