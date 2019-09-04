import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function ActivityPage(props) {
  const dispatch = useDispatch();

  const state = useSelector(state => state);

  let activities = state.activityReducer.activities

  
  function filertActivities(startDate, endDate){
     let filteredActivities=activities.filter(function (activity){
         if (activity.date<=startDate && activity.date>=endDate) {
            console.log(activity) 
            return activity
         }
     })
  }

  const dateOne='8/01/2019'
  const dateTwo='9/09/2019'
  return (
    <div>
      ActivityPage
      {console.log(state)}
      <button onClick={()=>activities=filertActivities(dateOne, dateTwo)}/>
      {/* {console.log(`activities ` + state.activityReducer.activities)} */}
      {/* {state.activityReducer.activities.map((activity, i) => (
        <activity name={activity} key={state.activityReducer.activies[i].id} />
      ))} */}
      {/* {state.activityReducer.activities.forEach(element => {
        <activity name={element} key={state.activityReducer.activies.id} />;
      })} */}
       { activities.map((activity, i)=>(
            <div class="card-content" name={activity.content} key={activity.id}>Date: {activity.date} Activity: {activity.content} <br/> Time: {activity.activityTimeInMinuets} Type: {activity.contentType} </div>
        ))}

    </div>
  );
}
