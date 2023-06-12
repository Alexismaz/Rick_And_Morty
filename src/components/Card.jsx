export default function Card(props) {
   let {personaje, onClose} = props
   return (
      <div style={{ flexBasis: '25%', marginTop: "20px"}}>
         <button onClick={onClose}>X</button> 
         <h2>name: {personaje.name}</h2>
         <h2>status: {personaje.status}</h2>
         <h2>species: {personaje.species}</h2>
         <h2>gender: {personaje.gender}</h2>
         <h2>origin: {personaje.origin.name}</h2>
         <img src={personaje.image} alt='' />
      </div>
   );
}
