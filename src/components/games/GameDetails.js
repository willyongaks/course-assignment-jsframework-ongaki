import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API2 } from "../../constants/api/Api"


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

 const url = API2(id);



  useEffect(() => {
    console.log(url)
    
    async function fetchData(){
      try{
        const response = await fetch(url, options)
        console.log(response)

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setGame(json);
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
      <img src={game.thumbnail} alt={game.thumbnail} />
      <h1 key={game.id}>{game.title}</h1>
    </div>
  )
}

export default GameDetails