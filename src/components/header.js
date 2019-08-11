import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/Header.css';

class Header extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <Link to="/">Home</Link>
                                <Link to="/braille">Braille</Link>
                                <Link to="/morse">Morse</Link>
                                <Link to="/sudoku">Sudoku Solver</Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;