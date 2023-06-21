import { Link } from "react-router-dom"
import "./Card.css"
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";
function Card({personaje, onClose, addFav, removeFav, myFavorites}) {
   const [isfav, setIsFav] = useState(false)
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === personaje.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   const handleFavorite = () => {
      if(isfav === false) {
         setIsFav(true)
         addFav(personaje)
      } else {
         setIsFav(false)
         removeFav(personaje.id)
      }
   }
   
   return (
      <div className="card">
         {isfav ? (
         <button className="buttonFav" onClick={handleFavorite}>❤️</button>
         ) : (
         <button className="buttonFav" onClick={handleFavorite}>🤍</button>
         )}
         <img src={personaje.image} alt={personaje.name} />
         <button className="buttonCard" onClick={() => {onClose(personaje.id); handleFavorite()}}>X</button> 
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
function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}
function mapDispatchToProps(dispatch) {
   return {
      addFav: function(p) {
         dispatch(addFav(p))
      },
      removeFav: function(id) {
         dispatch(removeFav(id))
      }
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card)
