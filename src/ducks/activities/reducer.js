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

    case "FILTER_ACTIVITIES":
    return{    
    activities: (state.activities.filter(function(activity) {
          if (activity.date >= action.startDate && activity.date <= action.endDate) {
            console.log(activity.date);
            return activity;
          }
        }))
      };
      case "CREATE_ACTIVITY":
        return{
          ...state,
          activities: action.payload
        }
      default:
      return state;
  }
}
