import React, { Component } from 'react';
import './MovieItem.css';

class MovieItem extends Component {
    render() {
        const { Title, Year, Poster, addFilm } = this.props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button type="button" className="movie-item__add-button" onClick={() => addFilm(this.props)} >Добавить в список</button>
                </div>
            </article>
        );
    }
}
 
export default MovieItem;