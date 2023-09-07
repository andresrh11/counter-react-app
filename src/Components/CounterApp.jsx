import { useState } from "react";
import "../style.css";
import PropTypes from "prop-types";

export function CounterApp({ value }) {
  const initial = value;
  const [counter, setCounter] = useState(value);
  const handledSub = () => {
    setCounter(counter - 1);
  };
  const handledAdd = () => {
    setCounter(counter + 1);
  };
  const handledReset = () => {
    setCounter(initial);
  };
  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <div className="but">
        <button onClick={handledAdd}>+1</button>
        <button onClick={handledSub}>-1</button>
        <button onClick={handledReset}>Reset</button>
      </div>
    </>
  );
}
CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
  num: PropTypes.number,
};
