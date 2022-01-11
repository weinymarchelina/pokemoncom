import React, { useState } from "react";
import PokemonList from "./PokemonList";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Pokemon List</h1>
      <PokemonList />
    </div>
  );
};

export default Home;
