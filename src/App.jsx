//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom" 
import HomePage from "./page/HomePage";
import ListPokemonsPage from './page/ListPokemonsPage';
import PokemonsDetailsPage from './page/PokemonsDetailsPage';
import PokemonsByTypePage from './page/PokemonByTypePage';

//import viteLogo from '/vite.svg'
function App() {
  return (
    <BrowserRouter >
    <Routes> 
      <Route path="/" element ={<HomePage/>}/>
      <Route path="/list100" element = {<ListPokemonsPage/>} />
      <Route path="/pokemonsdetails/:pokemonId" element = {<PokemonsDetailsPage />} />
      <Route path="/pokemonsbytype/:type" element={<PokemonsByTypePage />} />
    </Routes>
    </BrowserRouter >

);
}

export default App;