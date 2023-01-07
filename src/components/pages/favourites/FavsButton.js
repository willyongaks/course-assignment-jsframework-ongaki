import "./index.css"
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useState } from "react";


const FavouriteButton = ({ game}) => {
    const [isFavourite, setIsFavourite] = useState(false);


    const handleFavsClick = (event) => {
        event.preventDefault();
        setIsFavourite(!isFavourite);

        localStorage.setItem("gameId", game.id);
        localStorage.setItem("gameTitle", game.title);
    }

    return (
        <button onClick={handleFavsClick} className="favs-button">
        {isFavourite ? < FaHeart /> : <FaRegHeart />}
        </button>
    );
}
export default FavouriteButton;
