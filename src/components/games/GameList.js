import { useEffect, useState } from "react";
import { API } from "../../constants/api/Api"

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4318904c87mshcf8fcdc984cadc9p1f8d99jsn9790322cce04',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

function GameList() {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try{
                const response = await fetch(API, options)
                
                if(response.ok){
                    const results = await response.json();
                    console.log(results)
                    setGames(results)
                }
            }catch(error){
                setError("something went wrong...!");
            }
        }
        fetchData();
    }, []) 

    if(loading){
        setLoading(false)
    }
    if(error){
        setError("an error occured")
    }
  return (
    <>
        <div className="main-title">
            <h1>Best game collection</h1>
        </div>
        <div className="post-container">
            {games.map((game) => {
                return (
                <div key={game.id}>
                    <div>
                    <a href="/details/:id">
                        <h3>{game.title}</h3>
                        <img src={game.thumbnail} alt={game.thumbnail} />
                    </a>
                    </div>
                </div>
                );
            })}
        </div>
    </>
    );

}

export default GameList