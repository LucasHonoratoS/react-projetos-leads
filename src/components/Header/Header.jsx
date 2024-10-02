import './Header.css';
import React from 'react';
import reactLogo from '../../assets/react.svg';

class Header extends React.Component {
    render() {
        return (
            <header>
                <img src={reactLogo} alt="Logo" />
                <h1>Lista de Leads</h1>
            </header>
        );
    }
}

export default Header;