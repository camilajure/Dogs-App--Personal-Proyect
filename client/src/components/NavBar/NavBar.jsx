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
                    <NavLink exact to="/" >Back</NavLink>
                        <NavLink exact to="/home" >Home</NavLink>
                        {/* <NavLink exact to="/home/:id" >Breed</NavLink> */}
                        <NavLink to="/createBreed" >Create Breeds</NavLink>

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


