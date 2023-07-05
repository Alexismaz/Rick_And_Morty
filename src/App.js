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
import Favorites from "./components/Favorites/Favorites"

function App() {
   const [access, setAccess] = useState(false)
   const navigate = useNavigate()
   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
            const { access } = data;
            setAccess(data);
            access && navigate('/home');
      } catch (error) {
         console.log(error)
      }
   }
   function logOut() {
      setAccess(false)
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   const [characters, setCharacters] = useState([])
   async function onSearch(id) {
      try {
         let existe = characters.some(element => element.id === parseInt(id))
         if(existe) {
            window.alert("ya existe ese personaje")
         } else {
            const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
               if (data.name) {
                  setCharacters((oldChars) => [...oldChars, data]);
               } else {
                  window.alert('¡No hay personajes con este ID!');
               }
            }
      } catch (error) {
         console.log(error)
      }
   }
   function onClose(id) {
      setCharacters((characters) => characters.filter((character) => character.id !== parseInt(id)))
   }
   const location = useLocation()
   return (
      <div className='App'>
         {location.pathname === "/" ? null : <Nav onSearch={onSearch} logOut={logOut}/>}
         <Routes>
            <Route path="/" element={<><Login/> <Form login={login}/></>}/>
            <Route path="/favorites" element={<><Favorites onClose={onClose}/></>}/>
            <Route path="/home" element={<><Home/><Cards characters={characters} onClose={onClose} /></> }/>
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="*" element={<Error/>}/>
         </Routes>
      </div>
   );
}

export default App;
