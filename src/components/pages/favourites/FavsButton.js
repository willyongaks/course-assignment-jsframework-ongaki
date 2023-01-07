
import { FaHeart } from 'react-icons/fa';


const FavouriteButton = ({ game}) => {
    const handleFavsClick = (event) => {
        event.preventDefault();

        localStorage.setItem("gameId", game.id);
        localStorage.setItem("gameTitle", game.title);
    }

    return (
        <button onClick={handleFavsClick}>
        <FaHeart />
        </button>
    );
}
export default FavouriteButton;
