import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import Nav from './Nav';
import Backdrop from './Backdrop';
import DayOne from './Articles/DayOne';
import DayTwo from './Articles/DayTwo';
import DayThree from './Articles/DayThree';
import DayFour from './Articles/DayFour';

class Exhibition extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showShare: false
        }
    }

    shareToggleHandler = () => {
        this.setState({ 
            showShare: !this.state.showShare
        });
    }

    shareClosedHandler = () => {
        this.setState((prevState) => {
            return { showShare: !prevState.showShare };
        });
    }

    render () {
        return (
            <div>
                <Header 
                    shareToggle={this.shareToggleHandler}
                    show={this.state.showShare} 
                />
                <Backdrop show={this.state.showShare}  clicked={this.shareClosedHandler} />
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