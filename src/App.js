import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchUsers from './components/SearchUsers';
import ProfilePage from './components/ProfilePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path = '/' component = {SearchUsers} />
            <Route path = '/user/:username' component = {ProfilePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
