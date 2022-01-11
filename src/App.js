import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

const Home = React.lazy(() => import("./Home"));
const NotFound = React.lazy(() => import("./NotFound"));
const PokemonHome = React.lazy(() => import("./PokemonHome"));
const PokemonDetails = React.lazy(() => import("./PokemonDetails"));

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <React.Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/pokemon" element={<PokemonHome />} />
              <Route path="/pokemon/:id" element={<PokemonDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </React.Suspense>
        </div>
        <footer>
          © 2022 Pokemoncom
          <br />
          Created by Weiny Marchelina
        </footer>
      </div>
    </Router>
  );
}

export default App;
