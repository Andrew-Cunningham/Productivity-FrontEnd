import React from "react";

import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const { count, name, user } = useSelector(state => ({
    ...state.counterReducer,
    ...state.nameReducer,
    ...state.userReducer
  }));
  const dispatch = useDispatch();

  function incrementCount() {
    dispatch({
      type: "INCREMENT_COUNT"
    });
  }

  function decrementCount() {
    dispatch({
      type: "DECREMENT_COUNT"
    });
  }

  function getUser() {
    dispatch({
      type: "GET_USER"
    });
  }

  return (
    <>
      {/* <h2>Counter: {count}</h2>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
      <div>
        <h3>Your name is: {name}</h3>
      </div> */}
      <button onClick={getUser}>Get User</button>
      <div>
      </div>
    </>
  );
}

export default Counter;
