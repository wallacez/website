import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <header>
                <ul id="headerButtons">
                    <li className="navButtonHome"><Link to="/">Home</Link></li>
                    <li className="navButtonAbout"><Link to="/about">About</Link></li>
                </ul>
            </header>
        )
    }
}

export default NavBar;