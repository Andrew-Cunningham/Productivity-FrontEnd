import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function CreateUser() {
  let formBody = {
    name: "",
    email: "",
    password: ""
  };

  const { user } = useSelector(state => ({
    // ...state.authenticationReducer,
    ...state.createUserReducer
  }));
  const dispatch = useDispatch();

  function handleNameChange(e) {
    e.preventDefault();
    //console.log(e.target.value);
    formBody.name = e.target.value;
  }

  function handleEmailChange(e) {
    e.preventDefault();
    //console.log(e.target.value);
    formBody.email = e.target.value;
  }
  function handlePasswordChange(e) {
    e.preventDefault();
    //console.log(e.target.value);
    formBody.password = e.target.value;
  }
  function handleSubmit(e) {
    e.preventDefault();
    //console.log(formBody);
    dispatch({
      type: "CREATE_USER",
      payload: formBody
    });
  }

  return (
    <div>
      Create User
      <form onSubmit={handleSubmit}>
        First Name
        <input
          name="name"
          onChange={handleNameChange}
          type="name"
          placeholder="Enter First Name"
          required
        ></input>
        <br></br>
        Email
        <input
          name="email"
          onChange={handleEmailChange}
          type="email"
          placeholder="Enter Email"
          required
        ></input>
        <br />
        Password
        <input
          name="password"
          onChange={handlePasswordChange}
          type="password"
          placeholder="Enter Password"
          required
        ></input>
        <br />
        <button type="submit" >
          CREATE ACCOUNT
        </button>
      </form>
    </div>
  );
}
