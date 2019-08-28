import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticateUser } from "../ducks/users/actions";
import {Redirect} from "react-router-dom"


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const dispatch = useDispatch();
 
  const user = useSelector(state =>
   state.user
  )

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(authenticateUser({email, password}))
    
  }
  

  return (
    <div>
      Login Page
      <div>Login</div>
      <form onSubmit={handleSubmit}>
        Email
        <input
          name="email"
          onChange={(e)=>setEmail(e.target.value)}
          type="email"
          placeholder="Enter Email"
          required
        ></input>
        <br />
        Password
        <input
          name="password"
          onChange={(e)=>setPassword(e.target.value)}
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
