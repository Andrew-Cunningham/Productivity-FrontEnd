import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {filertActivities} from "../ducks/activities/actions"
export default function ActivityPage(props) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const dispatch = useDispatch();

  const state = useSelector(state => state);

  let activities = state.activityReducer.activities;

  let filteredActivities;

  function handleSubmit(e) {
    e.preventDefault();
    console.log("running");
    console.log(startDate)
    dispatch(filertActivities(startDate, endDate))
  }

  return (
    <div>
      ActivityPage
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
        <br />

        <input
          class="btn"
          name="endDate"
          onChange={e => setEndDate(e.target.value)}
          type="date"
          placeholder="Enter End Date"
          required
        ></input>
        <br />

        <button class="btn" type="submit">Filter By Selected Dates</button>
      </form>
      {console.log(filteredActivities)}
      {/* {console.log(`activities ` + state.activityReducer.activities)} */}
      {/* {state.activityReducer.activities.map((activity, i) => (
        <activity name={activity} key={state.activityReducer.activies[i].id} />
      ))} */}
      {/* {state.activityReducer.activities.forEach(element => {
        <activity name={element} key={state.activityReducer.activies.id} />;
      })} */}
      {activities.map((activity, i) => (
        <div class="card-content" name={activity.content} key={activity.id}>
          Date: {activity.date} Activity: {activity.content} <br /> Time:{" "}
          {activity.activityTimeInMinuets} Type: {activity.contentType}{" "}
        </div>
      ))}
    </div>
  );
}
