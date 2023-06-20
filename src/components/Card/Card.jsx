import { Link } from "react-router-dom"
import "./Card.css"
export default function Card({personaje, onClose}) {
   return (
      <div className="card">
         <img src={personaje.image} alt={personaje.name} />
         <button className="buttonCard" onClick={() => onClose(personaje.id)}>X</button> 
         <Link to={`/detail/${personaje.id}`}>
         <h2 className="cardName">{personaje.name}</h2>
         </Link>
         <div className="cardInfo">
         <h2>{personaje.species}</h2>
         <h2>{personaje.gender}</h2>
         </div>
      </div>
   );
}
