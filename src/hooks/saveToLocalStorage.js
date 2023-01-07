export function saveFaves(favs) {
    localStorage.setItem("favourites", JSON.stringify(favs));
}