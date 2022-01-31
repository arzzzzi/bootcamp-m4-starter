import { ADD_FILM_TO_FAVORITES, REMOVE_FILM_FROM_FAVORITES, FIND_FILM, GET_STORAGE } from "./actions";



const initialState = {
    favorites: [],
    movies: [],
    id: localStorage.getItem('a')
}



function reducer(state = initialState, action) {
    const { favorites } = state;

    switch (action.type) {

        case ADD_FILM_TO_FAVORITES:
            const { obj } = action.payload
            const newFavorites = [...favorites];
            const movie = newFavorites.find(item => item.imdbID === obj.imdbID)
            if (!movie) {
                newFavorites.push(obj)
                return {...state, favorites: newFavorites }
            } else {
                alert('Фильм уже добавлен')
                return state
            }

        case REMOVE_FILM_FROM_FAVORITES:
            const { index } = action.payload
            const newFavoriteMovies = [...favorites]
            newFavoriteMovies.splice(index, 1);
            const anotherState = {...state, favorites: newFavoriteMovies }
            return anotherState
        case FIND_FILM:
            const { movieList } = action.payload
            const thirdState = { movies: movieList, favorites }
            return thirdState
        case GET_STORAGE:
            const { idUserList } = action.payload
            return ({...state, id: idUserList })
        default:
            return state
    }
}

export default reducer;