const ADD_FILM_TO_FAVORITES = 'ADD_FILM_TO_FAVORITES'
const REMOVE_FILM_FROM_FAVORITES = 'REMOVE_FILM_FROM_FAVORITES'
const FIND_FILM = 'FIND_FILM'
const GET_STORAGE = 'GET_STORAGE'

function addFilmToFavorites(obj) {
    return {
        type: ADD_FILM_TO_FAVORITES,
        payload: {
            obj: obj
        }
    }
}

function removeFilmFromFavorites(index) {
    return {
        type: REMOVE_FILM_FROM_FAVORITES,
        payload: {
            index: index
        }
    }
}

function findFilm(movieList) {
    return {
        type: FIND_FILM,
        payload: {
            movieList: movieList
        }
    }
}

function getStorage(id) {
    return {
        type: GET_STORAGE,
        payload: {
            idUserList: id
        }
    }
}

export { addFilmToFavorites, removeFilmFromFavorites, ADD_FILM_TO_FAVORITES, REMOVE_FILM_FROM_FAVORITES, FIND_FILM, findFilm, GET_STORAGE, getStorage };