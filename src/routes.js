import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import CheckBox from './components/CheckBox/CheckBox'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CheckBox} />
  </Route>
);
