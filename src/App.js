import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Exhibition from './Components/Exhibition';

class App extends Component {

    render () {
        return (
            <BrowserRouter>
                <div className="app">
                    <Exhibition />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;