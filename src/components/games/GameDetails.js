import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../../constants/api/Api";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4318904c87mshcf8fcdc984cadc9p1f8d99jsn9790322cce04',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

function GameDetails() {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let navigate = useNavigate();
  const { id } = useParams();

  if(!id){
    navigate.push("/");
  }

 const url = `${API}?${id}`;


  useEffect(() => {
    console.log(url)
    
    async function fetchData(){
      try{
        const response = await fetch(url, options)
        console.log(response)

        if (response.ok) {
          const json = await response.json();
          console.log(json);

          let gameData;
          gameData = json.find((game) => game.id === id);
          console.log(gameData)
          setGame(gameData);
          console.log(id)
        } else {
          setError("An error occured");
     }

      }catch(error){
        setError("error occured")
      }finally{
        setLoading(false)
      }
    }
    fetchData();
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }
  if (!game) {
  return <div>Game not found</div>;
}

  return (
    <div>
      <h1>{game.title}</h1>
    </div>
  )
}

export default GameDetails