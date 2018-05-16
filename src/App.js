import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Header from './Components/Header';
import Nav from './Components/Nav';
import Backdrop from './Components/Backdrop';
import DayOne from './Components/Articles/DayOne';
import DayTwo from './Components/Articles/DayTwo';
import DayThree from './Components/Articles/DayThree';
import DayFour from './Components/Articles/DayFour';
import Page404 from './Components/Page404';

class App extends Component {

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
            <HashRouter>
                <div className="container">
                    <Header 
                        shareToggle={this.shareToggleHandler}
                        show={this.state.showShare} 
                    />
                    <Backdrop show={this.state.showShare}  clicked={this.shareClosedHandler} />
                    <Switch>
                        <Route path="/" exact component={Nav} />
                        <Route path="/day-one" component={DayOne} />
                        <Route path="/day-two" component={DayTwo} />
                        {/*<Route path="/day-three" component={DayThree} />
                        <Route path="/day-four" component={DayFour} /> */}
                        <Route component={Page404}/>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

export default App;