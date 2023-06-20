import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState, useEffect } from 'react';
import axios from "axios"
import { Routes, Route , useLocation, useNavigate } from "react-router-dom"
import About from "./components/About/About.jsx"
import Detail from "./components/Detail/Detail.jsx"
import Login from './components/Login/Login';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Form from './components/Form/Form';

function App() {
   const [access, setAccess] = useState(false)
   const email = "alexisfajian@hotmail.com"
   const password = "Alexis12"
   const navigate = useNavigate()
   function login(userData) {
      if (userData.password === password && userData.email === email) {
         setAccess(true);
         navigate('/home');
      }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   const [characters, setCharacters] = useState([])
   function onSearch(id) {
      let existe = characters.some(element => element.id === parseInt(id))
      if(existe) {
         window.alert("ya existe ese personaje")
      } else {
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      }
   }
   function onClose(id) {
      setCharacters((characters) => characters.filter((character) => character.id !== parseInt(id)))
   }
   const location = useLocation()
   return (
      <div className='App'>
         {location.pathname === "/" ? null : <Nav onSearch={onSearch}/>}
         <Routes>
            <Route path="/" element={<><Login/> <Form login={login}/></>}/>
            <Route path="/home" element={<><Home/><Cards characters={characters} onClose={onClose} /></> }/>
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="*" element={<Error/>}/>
         </Routes>
      </div>
   );
}

export default App;
