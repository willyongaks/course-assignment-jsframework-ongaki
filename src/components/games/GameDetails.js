import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../../constants/api/Api";



function GameDetails() {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let navigate = useNavigate();
  const { id } = useParams();

  if(!id){
    navigate.push("/");
  }

  const url = API + "/" + id;


  useEffect(() => {
    console.log(url)
    
    async function fetchData(){
      try{
        const response = await fetch(url)
        console.log(response)

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setGame(json);
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

  return (
    <div>
      <h1>{game.title}</h1>
    </div>
  )
}

export default GameDetails