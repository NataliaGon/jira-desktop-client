import * as React from 'react';

import { IoIosTimer } from 'react-icons/io';
import {MdPause} from 'react-icons/md';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from '../../base-classes';


interface TimerProperties extends ComponentBaseProperties {

}
interface TimerState extends ComponentBaseState {
}
export default class Timer extends ComponentBase<TimerProperties, TimerState>{
    state = {
        time: 0,
        start: 0
    }
    startTimer() {
        this.setState({
            time: this.state.time,
            start: Date.now()
        })
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1)
        console.log("start")
    }
    stopTimer() {
        clearInterval(this.timer)
        console.log("stop")
    }

    public render() {
        return (
            <div>
                <IoIosTimer onClick={() => this.startTimer() } />
                <MdPause onClick={() => this.endTimer() }  />
            </div>
        )
    }
}