import React from 'react';
import Share from './Share';

import logo from '../images/logo.svg';
import aquaLogo from '../images/aquatherm-logo.png';

const header = (props) => {
    let togglerClass;
    if (props.show) {
        togglerClass = 'button toggler isActive';
    } else {
        togglerClass = 'button toggler';
    }

    return (
        <header className="header">
            <ul>
                <li>
                    <a className="logo" href="https://santehkomplekt.ua/" target="_blank" rel="noopener noreferrer" >
                        <img src={logo} alt="Сантехкомплект" />
                    </a>
                </li>
                <li>
                    <img src={aquaLogo} alt="logo" className="logo-at" />
                </li>
                <li className="row">
                    <a 
                        href="https://www.flickr.com/photos/161517446@N06/albums/with/72157696861906245" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="button photo">
                        Фото
                    </a>
                    <button type="button" className={togglerClass} onClick={props.shareToggle}>
                        Поделиться
                    </button>
                    <Share url="https://santehkomplekt.ua/aquatherm/" visible={props.show}/>
                </li>
            </ul>
        </header>
    );
};

export default header;