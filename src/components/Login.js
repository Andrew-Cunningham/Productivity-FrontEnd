import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserActivity } from "../ducks/activities/actions";
import {authenticateUser} from "../ducks/users/actions";
import "../styles/Login.css"

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
    <div id="main-container">
      
      <div >Sign In</div>
      <form onSubmit={handleSubmit}>
        
        <input class="btn"
          name="email"
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="Enter Email"
          required
        ></input>
        <br />
        
        <input class="btn"
          name="password"
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Enter Password"
          required
        ></input>
        <br />
        <button class="btn" type="submit">LOGIN</button>
      </form>
      <a href="/createuser">
        <button class="btn">CREATE ACCOUNT</button>
      </a>
    </div>
  );
}
