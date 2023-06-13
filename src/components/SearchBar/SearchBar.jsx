import "./SearchBar.css"
import React, { useState } from "react"
export default function SearchBar({props}) {
   const [id, setId] = useState("")
   const handleChange = (event) => {
      setId(event.target.value)
   }
   return (
      <div className="divSearch">
         <input type='search' value={id} onChange={handleChange}/>
         <button onClick={() => props.onSearch(id)}>Agregar</button>
         <button onClick={() => props.onSearch(Math.floor(Math.random() * (827 - 1 + 1)) + 1)}>Aleatorio</button>
      </div>
   );
}
