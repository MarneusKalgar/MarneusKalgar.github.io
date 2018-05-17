import React from 'react';
import { Link } from 'react-router-dom';

const svgIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="17" viewBox="0 0 370.814 370.814">
        <path d="M292.92 24.848L268.781 0 77.895 185.401l190.886 185.413 24.139-24.853-165.282-160.56z" />
    </svg>
);

const articlesNav = (props) => {
    let links;
    if (props.prev === 'zero') {
        links = (
            <ul>
                <li>
                    <Link to="/day-two" className="button next">
                        <span>День 2</span>
                        {svgIcon}
                    </Link>
                </li>
            </ul>
        );
    } else if (props.prev === 'one' && props.next=== 'three') {
        links = (
            <ul>
                <li>
                    <Link to="/day-one" className="button prev">
                        {svgIcon}
                        <span>День 1</span>
                    </Link>
                </li>
                <li>
                    <Link to="/day-three" className="button next">
                        <span>День 3</span>
                        {svgIcon}
                    </Link>
                </li>
            </ul>
        );
    } else if (props.prev === 'two' && props.next=== 'four') {
        links = (
            <ul>
                <li>
                    <Link to="/day-two" className="button prev">
                        {svgIcon}
                        <span>День 2</span>
                    </Link>
                </li>
                <li>
                    <Link to="/day-four" className="button next isDisabled">
                        <span>День 4</span>
                        {svgIcon}
                    </Link>
                </li>
            </ul>
        );
    } else if (props.next=== 'zero') {
        links = (
            <ul>
                <li>
                    <Link to="/day-three" className="button prev">
                        {svgIcon}
                        <span>День 3</span>
                    </Link>
                </li>
            </ul>
        );
    }

    return (
        <div className="articles-nav">
            {links}
        </div>
    );
};

export default articlesNav;