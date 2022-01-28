import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import { connect } from 'react-redux';
import { addFilmToFavorites } from '../../redux/actions'

class Movies extends Component {
  state = {
    movies: []
  }
  componentDidMount() {
    const { movies } = this.props;
    this.setState({ movies });
  }

  addFilm = (obj) => {
    this.props.addFilmToFavorites(obj)
  }

  render() {
    return (
      <ul className="movies">
        {this.props.movies && this.props.movies.map((movie) => (
          <li className="movies__item" key={movie.imdbID}>
            <MovieItem {...movie} addFilm={this.addFilm}/>
          </li>
        ))}
      </ul>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  addFilmToFavorites: obj => dispatch(addFilmToFavorites(obj))
})

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);


export default functionFromConnect(Movies);
