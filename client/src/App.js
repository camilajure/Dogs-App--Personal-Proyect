import './App.css';
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Breed from './components/Breed/Breed';
import CreateBreed from './components/CreateBreed/CreateBreed';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <BrowserRouter> 
          <NavBar path="/home" component={NavBar}/>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/:id" render={({ match }) => <Breed id={match.params.id} />}></Route>
          <Route exact path="/createbreed" component={CreateBreed} />
      </BrowserRouter>
  );
}
//<Route exact path="/updatetransporte/:id" render={({ match }) => <UpdateTransporte id={match.params.id} />}></Route> 
export default App;
