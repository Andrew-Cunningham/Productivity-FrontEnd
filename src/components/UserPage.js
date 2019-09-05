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
    <div>
      {state.userReducer.authenticated ? (
        <Link to={`/activitypage`}>
          <button class="btn">My Activities</button>
        </Link>
      ) : (
        <Link to={`/login`}>
          <button class="btn">Sign In To Access</button>
        </Link>
      )}
      {state.userReducer.authenticated ? ( <a href={`/`}>
        <button class="btn">Sign Out</button>
      </a>): ( <Link to={`/`}>
        <button class="btn">Home</button>
      </Link>)}
     
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
  );
}
