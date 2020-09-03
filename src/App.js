import React from 'react';
import './assets/scss/style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Home, DetailMovie, Actors, DetailsActor, OtherPage} from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home}></Route>
        <Route path="/movies/:id" component={DetailMovie}></Route>
        <Route path="/actors" exact component={Actors}></Route>
        <Route path="/actors/:id" component={DetailsActor}></Route>
        <Route path="/others" component={OtherPage}></Route>
      </Router>
    </div>
  );
}

export default App;
