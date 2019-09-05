export function getUserActivity(id) {
  return async function(dispatch) {
    //let id = JSON.stringify(id)
    console.log(id);
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/activities/" + id,
        {
          method: "get"
        }
      );
      let json = await response.json();
      dispatch({
        type: "GET_ACTIVITIES",
        payload: json
      });
    } catch (e) {
      console.error("Problem ", e);
    }
  };
}

export function filertActivities(startDate, endDate) {
  return {
    type: "FILTER_ACTIVITIES",
    startDate,
    endDate
  };
}

export const addActivity = (id, formBody, history) => {
  return async function(dispatch) {
    let bodyJSON = JSON.stringify(formBody);
    //console.log(bodyJSON)
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/activities/user/" + id,
        {
          method: "post",
          body: bodyJSON,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      let json = await response.json();
      dispatch({
        type: "CREATE_ACTIVITY",
        payload: json
      });
      history.push("/activitypage");
    } catch (e) {
      console.error("Problem ", e);
    }
  };
};

export const deleteActivity = (id, history) =>{
  return async function(dispatch){
    try{
      const response = await fetch(
        "http://localhost:8080/api/v1/activities/" + id,
        {
          method: "delete",
        }
      );
      let json = await response.json();
      dispatch({
        type: "DELETE_ACTIVITY"
      });
      history.push("/activitypage");
    } catch (e) {
      console.error("Problem ", e);
    }
    }
  }

