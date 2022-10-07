import "./styles.css";
import data from "./data";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <div>
        {data
          .filter((ele) => {
            if (input === "") {
              return ele;
            } else {
              return ele.toLowerCase().includes(input.toLowerCase());
            }
          })
          .map((el, inx) => (
            <h5 key={inx}>{el}</h5>
          ))}
      </div>
    </div>
  );
}
