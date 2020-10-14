import React, { useState } from "react";
import { createContext } from "react";
import "./App.css";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ServicesList from "./components/ServicesList/ServicesList";
import AddService from "./components/AddService/AddService";
import MakeAdmin from "./components/MakeAdmin/MakeAdmin";
import Order from "./components/Order/Order";
import Review from "./components/Review/Review";
import ClientServiceList from "./components/ClientServiceList/ClientServiceList";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isLoggedIn: false,
    name: null,
    email: null,
    error: null,
    isAdmin: false,
    image: null,
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
              <ClientServiceList />
            </Route>
            <Route exact path="/addservice">
              <AddService />
            </Route>
            <Route exact path="/makeadmin">
              <MakeAdmin />
            </Route>
            <Route exact path="/order">
              <Order />
            </Route>
            <Route exact path="/review">
              <Review />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
