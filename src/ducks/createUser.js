

export function createUserReducer(state = { user: [] }, action) {
    switch (action.type) {
      case "CREATE_USER":
        return {
          ...state,
          user: createUser(action.payload)
        };
      default:
        return state;
    }
  }


  const createUser = async formBody => {
    let bodyJSON = JSON.stringify(formBody);
    //console.log(bodyJSON)
    try {
      const response = await fetch("http://localhost:8080/api/v1/user", {
        method: "post",
        body: bodyJSON,
        headers: {
          "Content-Type": "application/json"
        }
      });
      //console.log("running");
      const json = await response.json();
      // console.log(JSON.stringify(json));
      
      //console.log(json)
      return json;
    } catch (e) {
      console.error("Problem ", e);
    }
  };