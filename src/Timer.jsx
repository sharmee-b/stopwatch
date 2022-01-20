import "./App.css";
import React, { useEffect, useMemo, useState, useSelector } from "react";
import { useDispatch } from "react-redux";
import { START, STOP } from "./app/actions";

function Timer() {
  const val = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("--------val", val);
  return (
    <div className="App">
      <div>---------{val}----------------</div>
      <button onClick={() => dispatch({ type: START })}>Start</button>
      <button onClick={() => dispatch({ type: STOP })}>Stop</button>
    </div>
  );
}

export default Timer;
