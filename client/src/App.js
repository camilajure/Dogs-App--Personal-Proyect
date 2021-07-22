import './App.css';
import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Breed from './components/Breed/Breed';
import CreateBreed from './components/CreateBreed/CreateBreed';
import NavBar from './components/NavBar/NavBar';



function App() {
  return (
    <BrowserRouter> 
<Switch>
          
          <Route exact path="/" component={LandingPage} />
          <Route>
          <NavBar path="/home" component={NavBar}/>
          <Route exact path="/home" component={Home}  />
          <Route exact path="/home/:id" render={({ match }) => <Breed id={match.params.id} />}></Route>
          <Route exact path="/createbreed" component={CreateBreed} />
          </Route>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
