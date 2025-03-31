import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./App.css";
import {
  decrement,
  increment,
  reset,
  incrementByAmount,
} from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }
  function handleResetClick() {
    dispatch(reset());
  }

  function handleIncAmountClick() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className="container">
      <button onClick={handleIncrementClick}> +</button>
      <p>Count: {count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <br />
      <br />
      <button onClick={handleResetClick}>Reset</button>
      <br />
      <input
        type="Number"
        value={amount}
        placeholder="Enter Amount"
        onChange={(e) => setAmount(e.target.value)}
      />

      <br />
      <br />
      <button onClick={handleIncAmountClick}>Increment by Amount</button>
    </div>
  );
}

export default App;
