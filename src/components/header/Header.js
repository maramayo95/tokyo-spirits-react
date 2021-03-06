import React from 'react'
import './navbar/NavBar.css'
import NavBar from './navbar/NavBar'
import './Header.css'
const Header = ({greeting}) => {
    return (
        <div>
            <div className="background-banner">
            <NavBar />
            <div className="headerDiv">
            <h1 className="h1Index">Tokyo Spirits</h1>
            <h2>{greeting}</h2>
            <p className="text-header">Encontra la que estas <span>buscando...</span></p>
            </div>

            <div className="gradient"></div>
            </div>
            
        </div>
    )
}

export default Header
