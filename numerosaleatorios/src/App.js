import "./App.css";
import Random from "./components/Random";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const randomNumber = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Random setNumber={number}> </Random>
        <button onClick={randomNumber}>New</button>
      </header>
    </div>
  );
}

export default App;
