
const initialState = {
  user: {},
  authenticated: false
};

export default function(state = initialState, action) {
  // console.log('State in create AUTH user is: ', state)
  switch (action.type) {
    case "AUTHENTICATE_USER":
      //let userData = (await authenticateUser(action.payload))
      console.log(action.payload)
      if (action.payload.id) {
        return {
          ...state,
          user: action.payload,
          authenticated: true
        };
      } else { return{
        ...state,
      }}
    case "CREATE_USER":
      return {
        ...state,
        user: action.payload,
        authenticated: true
      };

    default:
      return state;
  }
}
