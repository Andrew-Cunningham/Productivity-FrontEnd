



 export function getUserActivity(id) {
        return async function(dispatch){
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
          })
        } catch (e) {
          console.error("Problem ", e);
        }
        
        }
    }