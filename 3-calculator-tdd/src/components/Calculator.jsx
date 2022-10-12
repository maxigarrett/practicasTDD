import React, { useState } from "react";
import { evaluate } from "mathjs";
export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];
export const operations = ["+", "-", "*", "/"];
const equalSing = "=";
export const Calculator = () => {
  const [numberValue, setNumberValue] = useState("");

  const handelclickOperation = (op) => {
    setNumberValue((numvalue) => numvalue.concat(op));
  };

  return (
    <section>
      <h1>Calculator</h1>
      <input type="text" value={numberValue} readOnly />
      <div role="grid">
        {rows.map((row, idx) => (
          <div key={idx} role="row">
            {row.map((number) => (
              <button key={number} onClick={() => handelclickOperation(number)}>
                {number}
              </button>
            ))}
          </div>
        ))}
        {operations.map((operation) => (
          <button
            onClick={() => handelclickOperation(operation)}
            key={operation}
          >
            {operation}
          </button>
        ))}
        {/* para hacer calculos matematico con string usamos una libreria de math.js
         npm i mathjs */}
        <button onClick={() => setNumberValue(evaluate(numberValue))}>
          {equalSing}
        </button>
      </div>
    </section>
  );
};
