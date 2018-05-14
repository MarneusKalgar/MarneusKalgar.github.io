import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Nav from './Nav';
import Backdrop from './Backdrop';
import DayOne from './Articles/DayOne';
import DayTwo from './Articles/DayTwo';
import DayThree from './Articles/DayThree';
import DayFour from './Articles/DayFour';
import Page404 from './Page404';

class Exhibition extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showShare: false,
            dayOneActive: false,
            dayTwoActive: false,
            dayThreeActive: false,
            dayFourActive: false
        };
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
                <Switch>
                    <Route path="/" exact component={Nav} />
                    <Route path="/day-one" component={DayOne} />
                    <Route path="/day-two" component={DayTwo} />
                    <Route path="/day-three" component={DayThree} />
                    <Route path="/day-four" component={DayFour} />
                    <Route component={Page404}/>
                </Switch>
            </div>
        );
    }
}

export default Exhibition;