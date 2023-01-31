import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { action, horror, orginals, RomanceMovies, ComedyMovies } from "./url";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />

      <RowPost url={orginals} title="Netflix Orginals" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={horror} title="Horror" isSmall />
      <RowPost url={RomanceMovies} title="Romance" isSmall />
      <RowPost url={ComedyMovies} title="Comedy" isSmall />
    </div>
  );
}

export default App;

//https://api.themoviedb.org/3/discover/movie?api_key=$%7BAPI_KEY_HERE%7D&with_genres=35
//https://api.themoviedb.org/3/discover/movie?api_key=$%7BAPI_KEY_HERE%7D&with_genres=10749
