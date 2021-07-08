import './App.css';
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import {LandingPage} from './components/LandingPage/LandingPage';
import {Home} from './components/Home/Home';
import {Breed} from './components/Breed/Breed';
import {CreateBreed} from './components/Breed/Breed';
import {NavBar} from './components/NavBar/NavBar';


function App() {
  return (
    <BrowserRouter> 
          <NavBar />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/:id" component={Breed} />
          <Route exact path="/createbreed" component={CreateBreed} />
      </BrowserRouter>
  );
}

export default App;
