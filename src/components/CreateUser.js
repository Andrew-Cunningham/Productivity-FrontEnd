import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../ducks/users/actions";
import {Link} from 'react-router-dom'

export default function CreateUser(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useSelector(state => ({
    // ...state.authenticationReducer,
    ...state.createUserReducer
  }));
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(createUser({ name, email, password }, props.history));
  }

  return (
    <div>
      <Link to={`/`}>
        <button class="btn">Home</button>
      </Link>
      Create User
      <form onSubmit={handleSubmit}>
        First Name
        <input
          name="name"
          onChange={e => setName(e.target.value)}
          type="name"
          placeholder="Enter First Name"
          required
        ></input>
        <br></br>
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
        <button type="submit">CREATE ACCOUNT</button>
      </form>
    </div>
  );
}
