import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState } from 'react';
import axios from "axios"

function App() {
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
   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
