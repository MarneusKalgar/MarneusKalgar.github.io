import React from 'react';
import { NavLink } from 'react-router-dom';

import day1 from '../images/articles/aquatherm-STK-2018-01.jpg';
import day2 from '../images/articles/aquatherm-STK-2018-07.jpg';
import day3 from '../images/articles/aquatherm-STK-2017-040.jpg';
import day4 from '../images/articles/aquatherm-STK-2017-060.jpg';

const nav = () => {

    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink to="/day-one">
                        <p>День 1</p>
                        <span>Активен с 16.05.18</span>
                    </NavLink>
                    <div className="overlay" style={{backgroundImage: "url(" + day1 + ")"}} />
                </li>
                <li>
                    <NavLink to="/day-two">
                        <p>День 2</p>
                        <span>Активен с 17.05.18</span>
                    </NavLink>
                    <div className="overlay" style={{backgroundImage: "url(" + day2 + ")"}} />
                </li>
                <li className="isDisabled">
                    <NavLink to="/day-three">
                        <p>День 3</p>
                        <span>Активен с 18.05.18</span>
                    </NavLink>
                    <div className="overlay" style={{backgroundImage: "url(" + day3 + ")"}} />
                </li>
                <li className="isDisabled">
                    <NavLink to="/day-four">
                        <p>День 4</p>
                        <span>Активен с 19.05.18</span>
                    </NavLink>
                    <div className="overlay" style={{backgroundImage: "url(" + day4+ ")"}} />
                </li>
            </ul>
        </nav>
    );
};

export default nav;