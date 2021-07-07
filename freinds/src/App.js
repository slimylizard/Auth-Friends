import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import Freinds from './components/Freinds';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Authentication Project</h1>
        <ul>
          <li>
            <Link to='/protected'>Protected Page</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path='/protected' component={Freinds} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
