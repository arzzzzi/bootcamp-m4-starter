import React, { Component } from 'react';
import './Favorites.css';
import { connect } from 'react-redux';
import { getStorage, removeFilmFromFavorites } from '../../redux/actions';
import { Link } from 'react-router-dom';


class Favorites extends Component {
    state = {
        title: '',
        link: ''
    }
    removeFilm = index => {
        this.props.removeFilmFromFavorites(index)
        console.log(index)
    }
    changeTitle = e => {
        this.setState({
            title: e.target.value,
        })
    }
    saveList = () => {
        const title = this.state.title
        const movies = this.props.movies.map(movie => {
            return (movie.imdbID)
        })
        fetch(`https://acb-api.algoritmika.org/api/movies/list`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "title": title,
                "movies": movies
            })
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('a', data.id)
                this.props.setIdUserList(data.id)
                this.setState({ link: data.id })
            })
    }


    render() {
        return (
            <div className="favorites">
                <input value={this.state.title} className="favorites__name" onChange={this.changeTitle} />
                <ul className="favorites__list">
                    {this.props.movies && this.props.movies.map((item, index) => {
                        return <div className='fav'>
                            <li className='movieName' key={item.Title}>{item.Title} ({item.Year})</li>
                            <button className='deleteBtn' onClick={() => this.removeFilm(index)}>  X </button>
                        </div>
                    })}
                </ul>

                {this.props.idUserList
                    ? <Link to={`/list/${localStorage.getItem('a')}`}> Перейти </Link>
                    : <button type="button" className="favorites__save" onClick={this.saveList}>Сохранить список</button>
                }
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    removeFilmFromFavorites: index => dispatch(removeFilmFromFavorites(index)),
    setIdUserList: id => dispatch(getStorage(id))
})

const mapStateToProps = (state) => {
    return {
        movies: state.favorites,
        idUserList: state.id
    }
}

const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);


export default functionFromConnect(Favorites);