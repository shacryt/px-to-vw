import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Calculator from './pages/Calculator';
import Calculator2 from './pages/Calculator2';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/vw-to-px' component={Calculator} />
        <Route exact path='/px-to-vw' component={Calculator2} />
      </Switch>
    </Router>
  );
};

export default App;
