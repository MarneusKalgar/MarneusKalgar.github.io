import React from 'react';
import { Link } from 'react-router-dom';

const breadcrumbs = (props) => (
    <div className="breadcrumbs">
        <ul>
            <li><Link to="/">Главная</Link></li>
            <li>&ndash;</li>
            <li className="current">{props.day}</li>
        </ul>
    </div>
);

export default breadcrumbs;