import { async } from "q";

export function authenticationReducer(state = { user: [] }, action) {
  switch (action.type) {
    case "AUTHENTICATE_USER":
      
    var userData = authenticateUser(action.payload)
      console.log(userData)
      return {
        ...state,
        user:action.payload
      }
    default:
      return state;
  }
}

const authenticateUser = formBody => {
  let bodyJSON = JSON.stringify(formBody);
  //console.log(bodyJSON)
  try {
    const response =  fetch(
      "http://localhost:8080/api/v1/user/authenticate",
      {
        method: "post",
        body: bodyJSON,
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(response => {
      //console.log("running");

      const json = response.json().then((json) => {
        console.log(json);
        return json;
      });
    });
  } catch (e) {
    console.error("Problem ", e);
  }
};
