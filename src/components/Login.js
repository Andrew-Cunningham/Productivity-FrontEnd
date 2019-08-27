import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Login() {
  let formBody = {
    email: "",
    password: ""
  };

  const { count, name, user } = useSelector(state => ({
    ...state.counterReducer,
    ...state.nameReducer,
    ...state.userReducer,
    ...state.authenticationReducer
  }));
  const dispatch = useDispatch();

  function handleEmailChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    formBody.email = e.target.value;
  }
  function handlePasswordChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    formBody.password = e.target.value;
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formBody);
        dispatch({
          type: "AUTHENTICATE_USER",
          payload: formBody
        });
      
  }

  return (
    <div>
      Login Page
      <div>Login</div>
      <form>
        Email{" "}
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
        <button type="submit" onClick={handleSubmit}>
          LOGIN
        </button>
       
      </form> 
      <a href='/createuser'><button>Create Account</button></a>
    </div>
  );
}
