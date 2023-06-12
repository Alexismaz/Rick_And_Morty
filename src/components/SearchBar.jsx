export default function SearchBar(props) {
   const busqueda = () => {
      let input = document.getElementById("searchBar")
      props.onSearch(input.value)
   }
   return (
      <div>
         <input type='search' id="searchBar"/>
         <button onClick={busqueda}>Agregar</button>
      </div>
   );
}
