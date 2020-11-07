import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../styles/App.css';
import pokeList from '../containers/pokeList';
import pokeMon from '../containers/pokeMon';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={pokeList} />
        <Route path="/pokemon/:pokemon" exact component={pokeMon} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
