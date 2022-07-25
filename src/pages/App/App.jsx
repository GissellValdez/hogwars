//import logo from '../logo.svg';
import './App.css';
import NavBar from "../../components/NavBar/NavBar.jsx";
import AuthPage from "../AuthPage/AuthPage.jsx";
import HPBooksPage from "../HPBooksPage/HPBooksPage.jsx";
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
          <Route path="/books" element={<HPBooksPage resource="books"/>} />
        </Routes>
      </>
       : 
      <AuthPage setUser={setUser} />}
    </main>
  );
}