import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filertActivities, deleteActivity } from "../ducks/activities/actions";
import { Link } from "react-router-dom";
export default function ActivityPage(props) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const dispatch = useDispatch();

  const state = useSelector(state => state);

  let activities = state.activityReducer.activities;

  let filteredActivities;
  let id;

  function handleSubmit(e) {
    e.preventDefault();
    console.log("running");
    console.log(startDate);
    dispatch(filertActivities(startDate, endDate));
  }

  function handleClick(id) {
    //e.preventDefault();
    dispatch(deleteActivity(id, props.history));
  }

  return (
    <div id="main-container">
    <header id="showcase" class="grid">
<div class="bg-img"></div>
<div class="content-wrap">


      {state.userReducer.authenticated ? (
        <Link to={`/userpage`}>
          <button class="btn">Add Activity</button>
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
      <h2>My Activity</h2>
      <p>Filter Activity</p>
      {console.log(state)}
      <form onSubmit={handleSubmit}>
        <input
          class="btn"
          name="startDate"
          onChange={e => setStartDate(e.target.value)}
          type="date"
          placeholder="Enter Start Date"
          required
        ></input>
{`   To   `}
        <input
          class="btn"
          name="endDate"
          onChange={e => setEndDate(e.target.value)}
          type="date"
          placeholder="Enter End Date"
          required
        ></input>
        <br />

        <button class="btn" type="submit">
          Filter By Selected Dates
        </button>
      </form>
      {activities.length >= 1 ? (
        activities.map((activity, i) => (
          <div class="card-content" name={activity.content} key={activity.id}>
            Date: {activity.date} Activity: {activity.content} <br /> Time:{" "}
            {activity.activityTimeInMinuets} Type: {activity.contentType}<br/>
            <button class="btn" onClick={() => handleClick(activity.id)}>
              Delete
            </button>{" "}
          </div>
        ))
      ) : state.userReducer.authenticated ? (
        <div class="card-content">Add Activites To See Them Here!</div>
      ) : (
        <div class="card-content">Please Sign In To Add Activites</div>
      )}</div></header>
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
