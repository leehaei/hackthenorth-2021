import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import UserProvider from "./providers/UserProvider";
import './App.css';

function App() {
  
  return (
    <UserProvider>
    <Router>
    <div className="App">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
    </div>
    </Router>
    </UserProvider>
  );
}

export default App;
