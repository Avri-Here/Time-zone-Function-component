import React, { useState, useEffect } from "react";
export const Clock = (props) => {
  const [state, setState] = useState({
    Time: new Date().toLocaleString("en-GB", {
      timeZone: props.Tinezone,
    }),
    SetInterval: 1000,
  });
  useEffect(() => {
    // why you dont use in funciton below
    if (props.StateDad.Interval === 1000) {
      // need to think another solution
      setTimeout(() => {
        setState({
          ...state,
          SetInterval: 1000,
        });
      }, 5);
    }
    if (props.StateDad.Double === 2) {
      setTimeout(() => {
        setState({
          ...state,
          SetInterval:
            state.SetInterval === 1000
              ? state.SetInterval
              : state.SetInterval * props.StateDad.Double,
        });
      }, 5);
    }
    if (props.StateDad.Random !== null) {
      let LocalRandom = props.StateDad.Random;
      setTimeout(() => {
        setState({
          ...state,
          SetInterval: LocalRandom * 1000,
        });
      }, 5);
    }
    let startMove;
    clearInterval(startMove);
    if (state.SetInterval === 1000) {
      startMove = setInterval(() => {
        setState({
          ...state,
          Time: new Date().toLocaleString("en-GB", {
            timeZone: props.Tinezone,
          }),
        });
      }, state.SetInterval);
    } else {
      clearInterval(startMove);
      startMove = setInterval(() => {
        setState({
          ...state,
          Time: new Date().toLocaleString("en-GB", {
            timeZone: props.Tinezone,
          }),
        });
      }, state.SetInterval);
    }
    return () => {
      clearInterval(startMove);
    };
  }, [state.SetInterval, props.StateDad]);
  function resetSetIntervalTime() {
    setState({ ...state, SetInterval: 1000 });
  }
  function doubleSetIntervalTime() {
    setState({ ...state, SetInterval: state.SetInterval * 2 });
  }
  function displayCurrentTime() {
    setState({
      ...state,
      Time: new Date().toLocaleString("en-GB", {
        timeZone: props.Tinezone,
      }),
    });
  }
  // better to put style on css file
  return (
    <div>
      <h1 style={{ marginTop: 1 + "vw", marginBottom: 0 + "vw" }}>
        {state.Time}
      </h1>
      <h2 style={{ marginTop: 0 + "vw", marginBottom: 0 + "vw" }}>
        Render this component while{" "}
        {state.SetInterval === 1000 ? "1" : state.SetInterval / 1000} Seconds!
      </h2>
      <h2
        style={{
          marginTop: 0 + "vw",
          marginBottom: 0 + "vw",
          marginRight: 2 + "vw",
        }}
      >
        <button
          style={{ marginRight: 2 + "vw" }}
          onClick={resetSetIntervalTime}
        >
          Reset setInterval time!
        </button>
        <button
          style={{ marginRight: 2 + "vw" }}
          onClick={doubleSetIntervalTime}
        >
          double setInterval time !
        </button>
        <button style={{ marginRight: 2 + "vw" }} onClick={displayCurrentTime}>
          Update me now !
        </button>
      </h2>
      <hr />
    </div>
  );
};
