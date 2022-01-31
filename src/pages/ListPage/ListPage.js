import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import './ListPage.css';

class ListPage extends Component {
    state = {
        movies: [],
        titleOfList: '',
    }

    componentDidMount() {
        fetch(`https://acb-api.algoritmika.org/api/movies/list/${localStorage.getItem('a')}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    titleOfList: data.title
                })
                data.movies.forEach(movie => {
                    fetch(`http://www.omdbapi.com/?i=${movie}&apikey=751f7b09`)
                        .then(res => res.json())
                        .then(data => {
                            this.setState({
                                movies: [...this.state.movies, data]
                            })
                        })
                });
            })
    }
    render() {
        return (
            <div>
                <Header />
                <div className="list-page">
                    <h1 className="list-page__title">{this.state.titleOfList}</h1>
                    <ul>
                        {this.state.movies.map((item) => {
                            return (
                                <li key={item.imdbID}>
                                    <a href={`https://www.imdb.com/title/${item.imdbID}/`} >{item.Title} ({item.Year})</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

        );
    }
}

export default ListPage;