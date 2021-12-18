import React from 'react'
import './navbar/NavBar.css'
import NavBar from './navbar/NavBar'
import '../header/Header.css'
const Header = () => {
    return (
        <div>
            <div className="background-banner">
            <NavBar />
            
            <div className="headerDiv">
            <h1 className="h1Index">Tokyo Spirits</h1>
            <p className="text-header">Encontra la serie que estas <span>buscando...</span></p>
            </div>

            <div className="gradient"></div>
            </div>
            
        </div>
    )
}

export default Header
