export function getExistingfavs() {
    const favs = localStorage.getItem("favourites");

    if(favs === null) {
        return [];
    }else{
        return JSON.parse(favs)
    }
};