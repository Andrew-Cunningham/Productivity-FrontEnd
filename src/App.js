import React from "react";
import "./App.css";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import Counter from "./components/counter";
import Name from "./components/name";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/homePage";
import Login from "./components/Login";
import CreateUser from "./components/CreateUser";
import UserPage from "./components/UserPage";
import ActivityPage from "./components/ActivityPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREMENT_COUNT":
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}

function nameReducer(state = { name: "" }, action) {
  switch (action.type) {
    case "UPDATE_NAME":
      return {
        ...state,
        name: action.payload
      };

    default:
      return state;
  }
}

function userReducer(state = { user: [] }, action) {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        user: getUser()
      };
    default:
      return state;
  }
}

function authenticationReducer(state = { user: [] }, action) {
  switch (action.type) {
    case "AUTHENTICATE_USER":
      return {
        ...state,
        user: authenticateUser(action.payload)
      };
    default:
      return state;
  }
}

function createUserReducer(state = { user: [] }, action) {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        user: createUser(action.payload)
      };
    default:
      return state;
  }
}

const getUser = async id => {
  try {
    const response = await fetch("http://localhost:8080/api/v1/user/1");
    const json = await response.json();
    //console.log("Look at the response " + JSON.stringify(json));
    return json;
  } catch (e) {
    console.error("Problem ", e);
  }
};

const authenticateUser = async formBody => {
  let bodyJSON = JSON.stringify(formBody);
  //console.log(bodyJSON)
  try {
    const response = await fetch(
      "http://localhost:8080/api/v1/user/authenticate",
      {
        method: "post",
        body: bodyJSON,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    //console.log("running");
    const json = await response.json();
    //console.log(JSON.stringify(json));
    //console.log(json)
    return json;
  } catch (e) {
    console.error("Problem ", e);
  }
};

const createUser = async formBody => {
  let bodyJSON = JSON.stringify(formBody);
  //console.log(bodyJSON)
  try {
    const response = await fetch("http://localhost:8080/api/v1/user", {
      method: "post",
      body: bodyJSON,
      headers: {
        "Content-Type": "application/json"
      }
    });
    //console.log("running");
    const json = await response.json();
    // console.log(JSON.stringify(json));
    //console.log(json)
    return json;
  } catch (e) {
    console.error("Problem ", e);
  }
};

const rootReducer = combineReducers({
  counterReducer,
  nameReducer,
  userReducer,
  authenticationReducer,
  createUserReducer
});

const INITIAL_STATE = {};

const store = createStore(rootReducer, INITIAL_STATE);

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Router>
        <Route component={App}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/createuser" component={CreateUser} />
            <Route path="/userpage" component={UserPage} />
            <Route path="/activitypage" component={ActivityPage} />
          </Switch>
        </Route>
      </Router>
      <Counter />
      <Footer />
    </Provider>
  );
}

export default App;
