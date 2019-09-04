let intitalState = {
  activities: []
}

export default function(state = intitalState, action) {
  switch (action.type) {
    case "GET_ACTIVITIES":
      return {
        ...state,
        activities: action.payload
      };

   case "ADD_ACTIVITY":
       return{
           ...state,
           
       };
   
      default:
      return state;
  }
}
