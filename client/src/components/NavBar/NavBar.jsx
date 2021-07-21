import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import Search from './Search';

export default function NavBar() {
    return (
        <header className="navbar">
            <nav>
                <ul className="list">
                    <li className="list-item">
                    <NavLink className="boton" exact to="/" >Back</NavLink>
                        <NavLink  className="boton" exact to="/home"  >Home</NavLink>
                        {/* <NavLink exact to="/home/:id" >Breed</NavLink> */}
                        <NavLink className="boton" to="/createBreed" >Create Breeds</NavLink>

                        {/* <h1>input de busqueda por raza </h1>  */}
                        <div>
                        <Search />
                        </div>
                    </li>
                </ul>
                
            </nav>
        </header>
    )
}


// onClick={()=> {window.location.href = "/home"}}