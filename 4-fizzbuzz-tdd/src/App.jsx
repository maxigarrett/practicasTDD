import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";

export const fizzBuzz = (num) => {
  if (num === 0) throw new Error("is not posible divide to 0");
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";

  return num;
};

const printNumbers = (num) => {
  let showFizzAndBuzz = [];
  for (let i = 1; i <= num; i++) {
    showFizzAndBuzz.push(`${fizzBuzz(i)}`);
  }
  return showFizzAndBuzz;
};

function App() {
  // const [fizzbuzzNumber, setfizzBuzzNumber] = useState([]);

  return (
    <div className="App">
      {
        // console.log(printNumbers(15))
        printNumbers(20).map((el, inx) => (
          <button style={{ marginRight: "10px" }} key={inx}>
            {el}
          </button>
        ))
      }
    </div>
  );
}

export default App;
