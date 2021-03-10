import React from "react";
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import LeagueDetail from "./components/SportDetail/LeagueDetail";


function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path='/league/:id'>
            <LeagueDetail/>
          </Route>
          <Route path='*'>
            <h1 style={{textAlign:'center'}}> Error 404 Page not found</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
