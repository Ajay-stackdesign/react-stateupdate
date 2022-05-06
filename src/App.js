import React, { useState } from "react"
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={(e) => setCount(count + 1)}>Increase</button>
      <input type="number" value={count} />
      <button onClick={(e) => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
