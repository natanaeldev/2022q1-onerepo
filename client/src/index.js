import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Warehouse from './pages/Warehouse';
import Inventory from './pages/Inventory';
import Header from './components/Header';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route path={['/', '/warehouses']} exact component={Warehouse} />
        <Route path={'/inventory'} exact component={Inventory} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
