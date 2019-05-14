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
        start: 0,
        isStart:true,
        isStop:false
    }
    startTimer() {
        this.setState({
            // time: this.state.time,
            start: Date.now(),
            isStart: false,
            isStop: true
        })
        // this.timer = setInterval(() => this.setState({
        //     time: Date.now() - this.state.start
        // }), 1)

    }
    stopTimer() {
        // clearInterval(this.timer)
  
        console.log(this.state.start);
        this.setState({
            // time: this.state.time,
            start: Date.now(),
            isStart: true,
            isStop: false
        })
    }

    public render() {
        return (
            <div>
                <IoIosTimer className={
                    this.state.isStart?'display':'display-none'
                } onClick={() => this.startTimer() } />
                <MdPause className={
                    this.state.isStop?'display':'display-none'
                }
                onClick={() => this.stopTimer() }  />
            </div>
        )
    }
}