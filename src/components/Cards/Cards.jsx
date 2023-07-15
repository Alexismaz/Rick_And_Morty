import Card from '../Card/Card';
import "./Cards.css"

export default function Cards({characters, onClose}) {
   return (
      <div className="cardsContainer">
      {characters.map((element) => {
      return <Card key={element.id} personaje={element} onClose={onClose}/>
      })}
   </div>
   )
}
