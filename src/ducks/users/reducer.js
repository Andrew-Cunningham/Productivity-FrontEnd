
const initialState = {
  user: {},
  authenticated: false
};

export default function(state = initialState, action) {
  // console.log('State in create AUTH user is: ', state)
  switch (action.type) {
    case "AUTHENTICATE_USER":
      //let userData = (await authenticateUser(action.payload))
      if (action.payload.authenticated==true) {
        return {
          ...state,
          user: action.payload,
          authenticated: true
        };
      } else { return{
        ...state
      }}
    case "CREATE_USER":
      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
}
