import Card from './Card';

export default function Cards(props) {
   return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {props.characters.map((element, index) => {
      return <Card key={index} personaje={element} onClose={() => window.alert('Emulamos que se cierra la card')}/>
      })}
   </div>
   )
}
