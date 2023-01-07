import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useState } from "react";
import "./index.css"

const FavouriteButton = ({ game}) => {
    const [isFavourite, setIsFavourite] = useState(false);

    const data = game ? {
        gameId: game.id,
        gameTitle: game.title,
        gameImg: game.thumbnail,
    } : {};
   

    const handleClick = (event) => {
        event.preventDefault();

        const currentFavs = getExistingFavs();
        const productExist = currentFavs.find(fav => fav.gameId === data.gameId);

        if (productExist === undefined) {
            currentFavs.push(data);
            saveFavs(currentFavs);
            setIsFavourite(true);
        } else {
            const newFavs = currentFavs.filter(fav => fav.gameId !== data.gameId);
            saveFavs(newFavs);
            setIsFavourite(false);
        }
    };

    const getExistingFavs = () => {
        const favs = localStorage.getItem("favouriteGames");
        return favs ? JSON.parse(favs) : [];
    };

    const saveFavs = (favs) => {
        localStorage.setItem("favouriteGames", JSON.stringify(favs));
    };

    return (
        <button onClick={handleClick} className="favs-button">
            {isFavourite ? <FaHeart /> : <FaRegHeart />}
        </button>
    );
};

export default FavouriteButton;
