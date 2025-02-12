import { useEffect, useState } from "react";
import axios from "axios";
import "../css/components/gameCard.css";

export default function Games() {
  const [games, setGames] = useState();

  useEffect(() => {
    getAllGames();
  }, [games]);

  function getAllGames() {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/games/`, {
        withCredentials: true,
      })
      .then((response) => {
        setGames(response.data.games);
      });
  }

  function handleClick(id) {
    //console.log(id, "ID");
    window.location.href=`/games/${id}`;
  }


  return (
    <div>
      <h1>Games</h1>
      {games ? (
        games.map((game) => {
          return (
            <div key={game._id} className="gameCard" onClick={() => handleClick(game._id)}>
                <h2>{game.title}</h2>
                <h2>{game.description}</h2>
                <h2>{game.shortdescription}</h2>
                <h2>{game.price}</h2>
                <h2>{game.releaseDate}</h2>
                <h2>{game.status}</h2>
                <h2>{game.publisher}</h2>
                <h2>{game.developer}</h2>
            </div>
          )
        })
      ) : (
        <div></div>
      )}
    </div>
  );
}
