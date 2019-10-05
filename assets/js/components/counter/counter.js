import React, { Component } from 'react';
import Button from './button.js';


export default class Counter extends Component {
    constructor(){
        super(),
        this.state = {
            status: 'manual',
            currentNumber: 0
        }
    }
    componentWillMount(){
        console.log('component will mount started');
    }
    componentDidMount(){
        // =========this loop is causing infinite errors, git commit then comeback to look at it
        if(this.props.status == 'auto'){
            this.setState(
                {
                    status: this.props.status
                }, 
                () => {
                    this.counterRun();
                }
            );
        }
        // =========this loop is causing infinite errors, git commit then comeback to look at it
    }
    incrementClick = () => {
        this.setState({
            currentNumber: this.state.currentNumber + 1
        }, () => {
            console.log(this.state.currentNumber);
        });
    }
    decrementClick = () => {
        this.setState({
            currentNumber: this.state.currentNumber - 1
        }, () => {
            console.log(this.state.currentNumber);
        });
    }
    counterRun = () => {
        setInterval(() => {
            this.setState(
                {
                    currentNumber: this.state.currentNumber + 1
                }, 
                () => {
                console.log(this.state.currentNumber);
                }
            );
        }, 1000);
    };
    render(){
        // ===== styles ==========
        const styleCounterComp = {
            width: '100%',
            maxWidth: '400px',
            margin: '0 auto'
        };
        const styleNumber = {
            border: '3px solid black',
            padding: '20px',
            fontSize: '2rem',
            fontWeight: '900',
            textAlign: 'center'
        };
        const styleButtons = {
            display: this.props.status =='auto' ? 'none' : 'flex'
        };
        // ===== styles ==========
        return(
            <div id = 'counterComp'
                style = {styleCounterComp}>
                <div className = 'number'
                     style = {styleNumber}>
                    {this.state.currentNumber}
                </div>
                <div className = 'buttons'
                     style = {styleButtons}>
                    <Button action = "minus"
                            fontColor = 'white'
                            hoverColor = {'red'}
                            backgroundColor = {'black'}
                            triggerClick = {this.decrementClick}>
                        -
                    </Button>
                    <Button action = "plus"
                            fontColor = 'black'
                            hoverColor = {'blue'}
                            backgroundColor = {'white'}
                            triggerClick = {this.incrementClick}>
                        +
                    </Button>
                </div>
            </div>
        );
    }
}