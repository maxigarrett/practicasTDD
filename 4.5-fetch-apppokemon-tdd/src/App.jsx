import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pokemons, setpokemons] = useState([]);

  const getPokemons = async () => {
    try {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon");
      const pokemonResponse = await data.json();
      console.log(pokemonResponse.results);
      setpokemons(pokemonResponse);
    } catch (err) {
      console.log("error no se encontro la API   " + err);
    }
  };

  //si queremos llamarlo si hacer clic y se llene el array automaticamnete
  // useEffect(() => {
  //   getPokemons();
  // }, []);
  return (
    <div className="App">
      <h1>pokeAPP</h1>
      <button onClick={() => getPokemons()}>get pokemon</button>
      {pokemons.results &&
        pokemons.results.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
    </div>
  );
}

export default App;
