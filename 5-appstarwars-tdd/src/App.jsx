import { useEffect, useState } from "react";
import { getpeople } from "./api/people";
import "./App.css";

const URL = "https://swapi.dev/api/people";
const INTITIAL_ERR_NETWORK = { err: false, message: "" };

function App() {
  const [starwarPeople, setStarwarsPeople] = useState([]);
  const [showDetailsPeople, setShowDetailsPeople] = useState("");
  const [errState, SetErrState] = useState(INTITIAL_ERR_NETWORK);

  // const getstar = async () => {
  //   const res = await fetch("https://swapi.dev/api/people");
  //   const peopleResponse = await res.json();
  //   setStarwarsPeople(peopleResponse);
  // };

  useEffect(() => {
    getpeople(URL)
      .then((res) => {
        setStarwarsPeople(res);
        SetErrState(INTITIAL_ERR_NETWORK);
      })

      .catch(SetErrState({ err: true, message: "error network" }));
  }, []);

  const message = errState.message;
  return (
    <>
      <div className="App">
        <h1>App star wars</h1>
        {errState.err === false ? "" : <div>{message}</div>}
        {starwarPeople?.results?.map((character) => (
          <li
            // style={{ cursor: "pointer" }}
            className="list__details"
            key={character.name}
            // onClick={() => showDetails(character)}
          >
            {character.name}
          </li>
        ))}
      </div>

      <div> masa : 77</div>
    </>
  );
}

export default App;
