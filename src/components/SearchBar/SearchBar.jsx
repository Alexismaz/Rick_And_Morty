import "./SearchBar.css"
import React, { useState } from "react"
export default function SearchBar({props}) {

   const [id, setId] = useState("")
   const handleChange = (event) => {
      setId(event.target.value)
   }
   return (
      <div className="divSearch">
         <input className="inputSearch" placeholder="Busqueda por Id..." type='search' value={id} onChange={handleChange}/>
         <button onClick={() => props(id)}>Agregar</button>
         <button onClick={() => props(Math.floor(Math.random() * (827 - 1 + 1)) + 1)}>Aleatorio</button>
      </div>
   );
}
