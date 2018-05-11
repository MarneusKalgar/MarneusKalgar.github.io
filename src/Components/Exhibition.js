import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Header from './Header';
import Nav from './Nav';
import DayOne from './Articles/DayOne';
import DayTwo from './Articles/DayTwo';
import DayThree from './Articles/DayThree';
import DayFour from './Articles/DayFour';

class Exhibition extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <Header />
                <Route path="/" exact component={Nav} />
                <Route path="/day-one" component={DayOne} />
                <Route path="/day-two" component={DayTwo} />
                <Route path="/day-three" component={DayThree} />
                <Route path="/day-four" component={DayFour} />
            </div>
        );
    }
}

export default Exhibition;