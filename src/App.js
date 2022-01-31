import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';
import { connect } from 'react-redux'

import './reset.css';
import './common.css';

class App extends React.Component {
  render() {
    // localStorage.removeItem('a')
    return (
      <div className="app">
        <Route path="/" exact><MainPage /></Route>
        <Route path={`/list/${localStorage.getItem('a')}`} exact><ListPage /> </Route>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { idUserList: state.id }
}

export default connect(mapStateToProps)(App);
