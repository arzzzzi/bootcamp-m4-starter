import React, { Component } from 'react';
import { findFilm } from '../../redux/actions';
import './SearchBox.css';
import store from '../../redux/store';

class SearchBox extends Component {
    state = {
        searchLine: ''
    }
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
    }
    
    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        fetch(
            `http://www.omdbapi.com/?s=${this.state.searchLine}&apikey=751f7b09`
        )
        .then(res => res.json())
        .then(data => store.dispatch(findFilm(data.Search)))
    }
    render() {
        const { searchLine } = this.state;

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                            onChange={this.searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    }
}
 
export default SearchBox;
