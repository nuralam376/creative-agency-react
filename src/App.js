import React, { useState } from "react";
import { createContext } from "react";
import "./App.css";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import ServicesList from "./components/ServicesList/ServicesList";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isLoggedIn: false,
    name: null,
    email: null,
    error: null,
  });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/dashboard">
              <ServicesList />
            </Route>
            <Route exact path="/servicelist">
              <ServicesList />
            </Route>
          </Switch>
          <Redirect from="/dashboard" to="/servicelist" />
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
