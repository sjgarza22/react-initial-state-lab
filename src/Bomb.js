// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    countDown = () => {
        if (this.state.secondsLeft > 0) {
            return <p>{this.decrement()} seconds left before I go boom!</p>
        } else {
            return <p>Boom!</p>
        }
    }

    decrement = () => {
        const newCount = this.state.secondsLeft - 1;
        this.setState({
            secondsLeft: newCount
        })

        return this.state.secondsLeft;
    }

    render () {
        return (
            <div>{this.countDown()}</div>
        );
    }
}