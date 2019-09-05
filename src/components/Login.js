import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserActivity } from "../ducks/activities/actions";
import {authenticateUser} from "../ducks/users/actions";
import {Link} from "react-router-dom"

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
      {user.authenticated ? (
        <Link to={`/activitypage`}>
          <button class="btn">My Activities</button>
        </Link>
      ) : (
        <Link to={`/login`}>
          <button class="btn">Sign In To Access</button>
        </Link>
      )}
      {user.authenticated ? ( <a href={`/`}>
        <button class="btn">Sign Out</button>
      </a>): ( <Link to={`/`}>
        <button class="btn">Home</button>
      </Link>)}
  <h2>Sign In</h2>
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
      <main id="main">

        <section id="section-b" class="grid">
          <ul>
            <li>
              <div class="card">
                <img
                  src="https://images.pexels.com/photos/1927502/pexels-photo-1927502.jpeg"
                  alt=""
                ></img>
                <div class="card-content">
                  <h3 class="card-title">Keep Track Of What You Do</h3>
                  <p>
                    Productivity Tracker is a tool that helps you keep track of activities
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="card">
                <img
                  src="https://images.pexels.com/photos/159519/back-to-school-paper-colored-paper-stationery-159519.jpeg"
                  alt=""
                ></img>
                <div class="card-content">
                  <h3 class="card-title">Sort Your Activities</h3>
                  <p>
                    View your saved activities by a date range to see how much time you spent on each activity  
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="card">
                <img
                  src="https://images.pexels.com/photos/707676/pexels-photo-707676.jpeg"
                  alt=""
                ></img>
                <div class="card-content">
                  <h3 class="card-title">Make A Better Use Of Your Time</h3>
                  <p>
                    If you could see that you spent 100 hours watching TV shows, wouldn't you want to make change?
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
