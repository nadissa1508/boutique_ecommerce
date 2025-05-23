import searchIcon from "../assets/search.png";

//falta poner icono de búsqueda
function SearchBar() {
  return (
    <div className="search-bar">
        <input type="text" placeholder="Buscar productos..." />
        <button type="submit">
            <img src={searchIcon} alt="Search" className="search-icon" />
        </button>
    </div>
  );
}   

export default SearchBar;