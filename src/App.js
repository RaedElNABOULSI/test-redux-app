import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions/increment";
import { decrement } from "./actions/decrement";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div className="App">
      <h1>hello</h1>
      <h2>COUNTER is : {counter}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
