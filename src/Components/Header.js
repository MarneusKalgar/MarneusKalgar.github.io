import React from 'react';
import Share from './Share';

import logo from '../images/logo.svg';
import aquaLogo from '../images/aquatherm-logo.png';

const header = (props) => {
    let togglerClass;
    if (props.show) {
        togglerClass = 'toggler isActive';
    } else {
        togglerClass = 'toggler';
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
                    <a className="logo-at" href="#">
                        <img src={aquaLogo} alt="logo" />
                    </a>
                </li>
                <li className="row">
                    <a href="https://www.flickr.com/photos/161517446@N06/albums" target="_blank" rel="noopener noreferrer" className="photo">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.2 512.2" width="20" height="20">
                            <path d="M495.1 38.4H85.5c-9.4 0-17.1 7.6-17.1 17.1v17.1H51.3c-9.4 0-17.1 7.6-17.1 17.1v17.1H17.1c-9.4 0-17.1 7.6-17.1 17.1v332.8c0 9.4 7.6 17.1 17.1 17.1h409.6c9.4 0 17.1-7.6 17.1-17.1v-17.1h17.1c9.4 0 17.1-7.6 17.1-17.1v-17.1h17.1c9.4 0 17.1-7.6 17.1-17.1V55.5c0-9.5-7.6-17.1-17.1-17.1zm-68.3 276l-44.7-51.2c-3.4-3.9-9.4-3.9-12.9 0l-54 61.8L168 194.2c-3.2-2.9-8.1-2.9-11.3 0L17.3 318.1V132.3c0-4.7 3.8-8.5 8.5-8.5h392.5c4.7 0 8.5 3.8 8.5 8.5v182.1zm25.7 108H444V123.7c0-9.4-7.6-17.1-17.1-17.1H51.4v-8.5c0-4.7 3.8-8.5 8.5-8.5h392.5c4.7 0 8.5 3.8 8.5 8.5l.1 315.8c0 4.7-3.8 8.5-8.5 8.5zm34.1-34.2h-8.5V89.6c0-9.4-7.6-17.1-17.1-17.1H85.5V64c0-4.7 3.8-8.5 8.5-8.5h392.5c4.7 0 8.5 3.8 8.5 8.5v315.7h.1c0 4.7-3.8 8.5-8.5 8.5z"/>
                            <path d="M307.4 174.9c-18.8 0-34.1 15.3-34.1 34.1s15.3 34.1 34.1 34.1 34.1-15.3 34.1-34.1-15.3-34.1-34.1-34.1z"/>
                        </svg>
                        <span>Фотографии с выставки</span>
                    </a>
                    <button type="button" className={togglerClass} onClick={props.shareToggle}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 473.932 473.932" width="20" height="20">
                            <path d="M385.513 301.214c-27.438 0-51.64 13.072-67.452 33.09l-146.66-75.002c1.92-7.161 3.3-14.56 3.3-22.347 0-8.477-1.639-16.458-3.926-24.224l146.013-74.656c15.725 20.924 40.553 34.6 68.746 34.6 47.758 0 86.391-38.633 86.391-86.348C471.926 38.655 433.292 0 385.535 0c-47.65 0-86.326 38.655-86.326 86.326 0 7.809 1.381 15.229 3.322 22.412L155.892 183.74c-15.833-20.039-40.079-33.154-67.56-33.154-47.715 0-86.326 38.676-86.326 86.369s38.612 86.348 86.326 86.348c28.236 0 53.043-13.719 68.832-34.664l145.948 74.656c-2.287 7.744-3.947 15.79-3.947 24.289 0 47.693 38.676 86.348 86.326 86.348 47.758 0 86.391-38.655 86.391-86.348.022-47.736-38.611-86.37-86.369-86.37z"/>
                        </svg>
                        <span>
                            Поделиться
                        </span>
                    </button>
                    <Share url="/" visible={props.show}/>
                </li>
            </ul>
        </header>
    );
};

export default header;