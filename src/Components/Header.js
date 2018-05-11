import React from 'react';

import logo from '../images/logo.svg';
import aquaLogo from '../images/aquatherm-logo.png';

const Header = () => (
    <header className="header">
        <a className="logo" href="https://santehkomplekt.ua/" target="_blank" rel="noopener noreferrer" >
            <img src={logo} alt="Сантехкомплект" />
        </a>
        <a className="logo-at" href="#">
            <img src={aquaLogo} alt="logo" />
        </a>
    </header>
);

export default Header;