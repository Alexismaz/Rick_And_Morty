import Card from './Card';

export default function Cards({characters, onClose}) {
   return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {characters.map((element) => {
      return <Card key={element.id} personaje={element} onClose={onClose}/>
      })}
   </div>
   )
}
