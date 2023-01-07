import React, { useEffect, useState } from "react";
import DeleteFavs from "./DeleteFavs";

function Favoutites() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const favs = localStorage.getItem("favouriteGames");
    setFavourites(favs ? JSON.parse(favs) : []);
  }, []);

  return (
    <>
      <div className="favourites-heading">
        <h3>Your Favoutites</h3>
      </div>
      <div className="favourites-container">
        {favourites.map(game => (
          <div key={game.gameId} className="favourites-item">
            <img src={game.gameImg} alt={game.gameTitle} />
            <h3>{game.gameTitle}</h3>
          </div>
        ))}
      </div>
      < DeleteFavs />
    </>
);

}

export default Favoutites;
