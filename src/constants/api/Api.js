export const API = "https://free-to-play-games-database.p.rapidapi.com/api/games";
export const API2 = (gameId) => {
  return `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${encodeURIComponent(gameId)}`;
}

export const TOKEN_PATH="/jwt-auth/v1/token";
export const BASE_URL = "http://localhost:8888/Movie_Database/wordpress/wp-json";