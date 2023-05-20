  import { useState } from "react";
  import "./App.css";
  import ImageRickMorty from "./img/rick-morty.png";
  import Characters from "./components/Characters";

  function App() {
    const [characters, setCharacters] = useState(null);
    const reqApi = async () => {
      const api = await fetch("https://rickandmortyapi.com/api/character");
      const charactersApi = await api.json();
      setCharacters(charactersApi.results);
    };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">Rick And Morty</h1>
          {characters ? (
           <Characters Characters={characters} setCharacters={setCharacters}/>

          ) : (
            <>
              {" "}
              <img
                src={ImageRickMorty}
                alt="Rick and Morty"
                className="img-home"
              ></img>
              <button onClick={reqApi} className="btn-search">
                Search Characters
              </button>{" "}
            </>
          )}
        </header>
      </div>
    );
  }

  export default App;
