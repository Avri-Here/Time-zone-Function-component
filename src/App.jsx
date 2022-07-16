import { Clock } from "./Clock";
import React, { useState } from "react";

export const App = () => {
  const [state, setState] = useState({
    Interval: null,
    Double: null,
    Random: null,
  });
  function Reset() {
    setState({ ...state, Interval: 1000 });
    setTimeout(() => {
      setState({ ...state, Interval: null });
    }, 1);
  }
  function DoubleAll() {
    setState({ ...state, Double: 2 });
    setTimeout(() => {
      setState({ ...state, Double: null });
    }, 1);
  }
  function Randomize() {
    setState({ ...state, Random: Math.floor(Math.random() * 10) + 1 });
    setTimeout(() => {
      setState({ ...state, Random: null });
    }, 1);
  }
  return (
    <>
      <h1 style={{ marginBottom: 0 + "vw" }}>Full control here!</h1>
      <h1 style={{ marginTop: 1.5 + "vw" }}>
        <button onClick={Reset} style={{ marginRight: 2 + "vw" }}>
          Reset all setIntervals time !
        </button>
        <button style={{ marginRight: 2 + "vw" }} onClick={DoubleAll}>
          Double all setIntervals time !
        </button>
        <button style={{ marginRight: 2 + "vw" }} onClick={Randomize}>
          Randomize setInterval time !
        </button>
      </h1>
      <hr />
      <Clock Tinezone={"Asia/Jerusalem"} StateDad={state} />
      <Clock Tinezone={"America/Argentina/Buenos_Aires"} StateDad={state} />
      <Clock Tinezone={"America/New_York"} StateDad={state} />
    </>
  );
};
