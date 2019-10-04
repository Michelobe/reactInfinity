import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter/counter.js';


class App extends Component {
    constructor(){
        super()
        this.state = {}
    }
    render(){
        return(
            <div className = {'container'}>
                <Counter status = "auto" />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));