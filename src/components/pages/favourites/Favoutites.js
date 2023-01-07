import React, { useEffect, useState } from "react";

function Favoutites() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const favs = localStorage.getItem("favouriteGames");
    setFavourites(favs ? JSON.parse(favs) : []);
  }, []);

  return (
    <>
      {favourites.map((fav) => (
        <div key={fav.gameId}>
          <p>{fav.gameTitle}</p>
          <img src={fav.gameImg} alt={fav.gameImg} />
          {/* You can also display other data such as the game's price, image, etc. */}
        </div>
      ))}
    </>
  );
}

export default Favoutites;
