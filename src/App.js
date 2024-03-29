import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/homePage";
import Login from "./components/Login";
import CreateUser from "./components/CreateUser";
import UserPage from "./components/UserPage";
import ActivityPage from "./components/ActivityPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Store from "./ducks/store"


function App() {
  return (
    <Provider store={Store}>
      
      <Router>
        <Route component={App}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/* <Header /> */}
            <Route path="/login" component={Login} />
            <Route path="/createuser" component={CreateUser} />
            <Route path="/userpage" component={UserPage} />
            <Route path="/activitypage" component={ActivityPage} />
          </Switch>
        </Route>
      </Router>
      <Footer />
    </Provider>
  );
}

export default App;
