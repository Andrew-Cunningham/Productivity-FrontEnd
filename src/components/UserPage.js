import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticateUser } from "../ducks/users/actions";
import { Link } from "react-router-dom";
import { getUserActivity } from "../ducks/activities/actions";
import { useEffect } from "react";
import { addActivity } from "../ducks/activities/actions";
export default function UserPage(props) {
  const dispatch = useDispatch();

  const state = useSelector(state => state);

  const user = state.userReducer.user;

  // dispatch(authenticateUser({email, password}, props.history))
  function getActivities(id) {
    dispatch(getUserActivity(id, props.historty));
  }

  useEffect(() => {
    getActivities(user.id);
  }, []);

  const [content, setContent] = useState("");
  const [contentType, setContentType] = useState("");
  const [activityTimeInMinuets, setActivityTimeInMinuets] = useState();
  const [date, setDate] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    //console.log("running")
    dispatch(
      addActivity(
        user.id,
        { content, contentType, activityTimeInMinuets, date },
        props.history
      )
    );
  }

  return (
    <div id="main-container">
      <header id="showcase" class="grid">
        <div class="bg-img"></div>
        <div class="content-wrap">
          {state.userReducer.authenticated ? (
            <Link to={`/activitypage`}>
              <button class="btn">My Activities</button>
            </Link>
          ) : (
            <Link to={`/login`}>
              <button class="btn">Sign In To Access</button>
            </Link>
          )}
          {state.userReducer.authenticated ? (
            <a href={`/`}>
              <button class="btn">Sign Out</button>
            </a>
          ) : (
            <Link to={`/`}>
              <button class="btn">Home</button>
            </Link>
          )}
          <h2>Add Activity</h2>
          <form onSubmit={handleSubmit}>
            <input
              class="btn"
              name="content"
              onChange={e => setContent(e.target.value)}
              type="string"
              placeholder="Enter Activity"
              required
            ></input>
            <br />
            <input
              class="btn"
              name="contentType"
              onChange={e => setContentType(e.target.value)}
              type="string"
              placeholder="Enter Activity Type"
              required
            ></input>
            <br />
            <input
              class="btn"
              name="activityTimeInMinuets"
              onChange={e => setActivityTimeInMinuets(e.target.value)}
              type="number"
              placeholder="Enter Time In Minuets"
              required
            ></input>
            <br />
            <input
              class="btn"
              name="date"
              onChange={e => setDate(e.target.value)}
              type="date"
              placeholder="Enter Date"
              required
            ></input>
            <br />
            <button class="btn" type="submit">
              Add Activity
            </button>
          </form>
        </div>
      </header>
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
                    Productivity Tracker is a tool that helps you keep track of
                    activities
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
                    View your saved activities by a date range to see how much
                    time you spent on each activity
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
                    If you could see that you spent 100 hours watching TV shows,
                    wouldn't you want to make change?
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
