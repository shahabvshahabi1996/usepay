import React from 'react';
import {Switch , Route , BrowserRouter } from 'react-router-dom';
import Home from './pages';
import Login from './pages/login';
// import SignUp from './pages/signup';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
