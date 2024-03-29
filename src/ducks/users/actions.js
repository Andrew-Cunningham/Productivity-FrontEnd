import { baseUrl } from "../dbURL";

export function authenticateUser(formBody, history) {
  return async function(dispatch) {
    let bodyJSON = JSON.stringify(formBody);
    try {
      const response = await fetch(baseUrl + "/api/v1/user/authenticate", {
        method: "post",
        body: bodyJSON,
        headers: {
          "Content-Type": "application/json"
        }
      });
      let json = await response.json();
      dispatch({
        type: "AUTHENTICATE_USER",
        payload: json
      });
      history.push("/userpage");
    } catch (e) {
      console.error("Problem ", e);
    }
  };
}

export const createUser = (formBody, history) => {
  return async function(dispatch) {
    let bodyJSON = JSON.stringify(formBody);
    //console.log(bodyJSON)
    try {
      const response = await fetch(baseUrl + "/api/v1/user", {
        method: "post",
        body: bodyJSON,
        headers: {
          "Content-Type": "application/json"
        }
      });
      let json = await response.json();
      dispatch({
        type: "CREATE_USER",
        payload: json
      });
      history.push("/userpage");
    } catch (e) {
      console.error("Problem ", e);
    }
  };
};
