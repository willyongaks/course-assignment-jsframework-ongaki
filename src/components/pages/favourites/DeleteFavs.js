
function DeleteFavs() {

    const handleClear = (event) => {
        event.preventDefault();
        localStorage.clear();
    }
  return (
    <button onClick={handleClear} className="deleteFavs-btn">Clear Favourites</button>
  )
}

export default DeleteFavs