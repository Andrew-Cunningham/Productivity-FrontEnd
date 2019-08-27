import React from "react";
import {useSelector, useDispatch } from "react-redux";

function Name() {
  const dispath = useDispatch();

  function handleUpdateName(e) {
    dispath({
      type: "UPDATE_NAME",
      payload: e.target.value
    });
  }

  return (
    <div>
      <input placeholder="Your Name" onChange={handleUpdateName} />
    </div>
  );
}

export default Name;
