//import logo from '../logo.svg';
import './App.css';
import NavBar from "../../components/NavBar/NavBar.jsx";
import AuthPage from "../AuthPage/AuthPage.jsx";
import HPCharactersPage from "../HPDataPages/HPCharactersPage/HPCharactersPage.jsx";
import HPBooksPage from "../HPDataPages/HPBooksPage/HPBooksPage.jsx";
import HPBookDetailPage from "../HPDataDetailPages/HPBookDetailPage/HPBookDetailPage.jsx";
import HPHousesPage from "../HPDataPages/HPHousesPage/HPHousesPage.jsx";
import HPHouseDetailPage from "../HPDataDetailPages/HPHouseDetailPage/HPHouseDetailPage.jsx";
import HPSpeciesPage from "../HPDataPages/HPSpeciesPage/HPSpeciesPage.jsx";
import HPSpecieDetailPage from "../HPDataDetailPages/HPSpecieDetailPage/HPSpecieDetailPage.jsx";
import HPWandsPage from "../HPDataPages/HPWandsPage/HPWandsPage.jsx";
import HPWandDetailPage from "../HPDataDetailPages/HPWandDetailPage/HPWandDetailPage.jsx";
import HogWARSGamePage from "../HogWARSPages/HogWARSGamePage/HogWARSGamePage.jsx";
import HPHomePage from "../HPHomePage/HPHomePage"
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
          <Route path="/" element={<HPHomePage />} />
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