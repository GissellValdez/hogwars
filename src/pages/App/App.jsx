//import logo from '../logo.svg';
import './App.css';
import NavBar from "../../components/NavBar/NavBar.jsx";
import AuthPage from "../AuthPage/AuthPage.jsx";
import HPCharactersPage from "../HPCharactersPage/HPCharactersPage.jsx";
import HPBooksPage from "../HPBooksPage/HPBooksPage.jsx";
import HPBookDetailPage from "../HPBookDetailPage/HPBookDetailPage.jsx";
import HPHousesPage from "../HPHousesPage/HPHousesPage.jsx";
import HPHouseDetailPage from "../HPHouseDetailPage/HPHouseDetailPage.jsx";
import HPSpeciesPage from "../HPSpeciesPage/HPSpeciesPage.jsx";
import HPSpecieDetailPage from "../HPSpecieDetailPage/HPSpecieDetailPage.jsx";
import HPWandsPage from "../HPWandsPage/HPWandsPage.jsx";
import HPWandDetailPage from "../HPWandDetailPage/HPWandDetailPage.jsx";
import HogWARSGamePage from "../HogWARSGamePage/HogWARSGamePage.jsx";
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser());
  //const [userName, setUserName] = useState("");

  return (
    <main className="App">
      {user ? 
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/characters" element={<HPCharactersPage />} />
          <Route path="/books" element={<HPBooksPage resource="books"/>} />
          <Route path="/books/:id" element={<HPBookDetailPage resource="books/"/>} />
          <Route path="/houses" element={<HPHousesPage resource="houses"/>} />
          <Route path="/houses/:id" element={<HPHouseDetailPage resource="houses/"/>} />
          <Route path="/species" element={<HPSpeciesPage resource="species"/>} />
          <Route path="/species/:id" element={<HPSpecieDetailPage resource="species/"/>} />
          <Route path="/wands" element={<HPWandsPage resource="wands"/>} />
          <Route path="/wands/:id" element={<HPWandDetailPage resource="wands/"/>} />
          <Route path="/hogwars" element={<HogWARSGamePage />} />
        </Routes>
      </>
       : 
      <AuthPage setUser={setUser} />}
    </main>
  );
}