//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
 {/*import SearchPokemonByNamePage from './page/SearchPokemonByNamePage';*/}
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom" 
import HomePage from "./page/public/HomePage";
import ListPokemonsPage from './page/public/ListPokemonsPage';
import PokemonsDetailsPage from './page/public/PokemonsDetailsPage';
import PokemonsByTypePage from './page/public/PokemonByTypePage';
import PokemonRandomTeamPage from './page/public/PokemonRandomTeamPage';
import PokemonResistancePage from './page/public/PokemonResistancePage';
import SearchResultsPage from './page/public/SearchResultsPage';
//import DashboardPage from "./page/admin/DashboardPage";
import AdminListPokemonsPage from './page/admin/AdminListPokemonsPage';
import CreatePokemonPage from './page/admin/CreatePokemonPage';
import UpdatePokemonPage from './page/admin/UpdatePokemonPage';
import LoginPage from './page/public/LoginPage';

//import viteLogo from '/vite.svg'
function App() {
  return (
    <BrowserRouter >
    <Routes> 

      <Route path="/" element ={<HomePage/>}/>
      <Route path="/list100" element = {<ListPokemonsPage/>} />
      <Route path="/pokemonsdetails/:pokemonId" element = {<PokemonsDetailsPage />} />
      <Route path="/pokemon-resistance/:typeres" element = {<PokemonResistancePage />} />
      <Route path="/pokemonsbytype/:type" element={<PokemonsByTypePage />} />
      <Route path="/pokemon-randomteam" element={<PokemonRandomTeamPage />} />
      <Route path="/search/:searchText" element={<SearchResultsPage />} />
      {/*<Route path="/search-pokemonbyname" element={<SearchPokemonByNamePage />} />*/}
      {/*<Route path="/admin/pokemons" element={<DashboardPage />} />*/}
      <Route path="/admin/pokemons" element={<AdminListPokemonsPage />}/>
      <Route path="/admin/create-pokemons" element={<CreatePokemonPage />} />
      <Route path="/admin/pokemons—update/:pokemonId" element={<UpdatePokemonPage />}/>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    </BrowserRouter >

);
}

export default App;