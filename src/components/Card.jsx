export default function Card({personaje, onClose}) {
   return (
      <div style={{ flexBasis: '25%', marginTop: "20px"}}>
         <img src={personaje.image} alt={personaje.name} />
         <button onClick={() => onClose(personaje.id)}>X</button> 
         <h2>name: {personaje.name}</h2>
         <h2>status: {personaje.status}</h2>
         <h2>species: {personaje.species}</h2>
         <h2>gender: {personaje.gender}</h2>
         <h2>origin: {personaje.origin.name}</h2>
      </div>
   );
}
