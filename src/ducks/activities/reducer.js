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

    case "FILTER_ACTIVITY":
        activities: (activities.filter(function(activity) {
          if (activity.date >= startDate && activity.date <= endDate) {
            console.log(activity.date);
            return activity;
          }
        }))
   
      default:
      return state;
  }
}
