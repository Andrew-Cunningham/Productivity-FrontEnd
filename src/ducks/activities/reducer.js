let intitalState = [];

export default function(state = intitalState, action) {
  switch (action.type) {
    case "GET_ACTIVITIES":
      return [...action.payload];

    default:
      return state;
  }
}
