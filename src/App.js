import "./App.css";
import { useState } from "react";
function App() {
  let [count, setCount] = useState(0);
  const Add = () => {
    setCount(count + 1);
  };
  const Minus = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>Count: {count}</div>
        <button onClick={Add}>Increment</button>
        <button onClick={Minus}>Decrement</button>
      </header>
    </div>
  );
}

export default App;
