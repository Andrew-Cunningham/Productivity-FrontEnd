import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserActivity } from "../ducks/activities/actions";
import {authenticateUser} from "../ducks/users/actions"

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const user = useSelector(state => ({
    ...state.authenticationReducer
  }));
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(authenticateUser({email, password}, props.history));
    //dispatch(getUserActivity(props.user.id, props.history))
  }

  return (
    <div>
      Login Page
      <div>Login</div>
      <form onSubmit={handleSubmit}>
        Email
        <input
          name="email"
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="Enter Email"
          required
        ></input>
        <br />
        Password
        <input
          name="password"
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Enter Password"
          required
        ></input>
        <br />
        <button type="submit">LOGIN</button>
      </form>
      <a href="/createuser">
        <button>CREATE ACCOUNT</button>
      </a>
    </div>
  );
}
