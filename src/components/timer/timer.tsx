import * as React from 'react';
import { IoIosTimer } from 'react-icons/io';
import {MdPause} from 'react-icons/md';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from '../../base-classes';
const { ipcRenderer } = require('electron');

interface TimerProperties extends ComponentBaseProperties {
 id?:number
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
            start: Date.now(),
            isStart: false,
            isStop: true
        })
    }
    stopTimer() {
        const time = Date.now() - this.state.start
        console.log(time);
        this.setState({
            isStart: true,
            isStop: false
        })
       const conf= confirm('Would you like to save time?');
     if(conf){
        const issueNew={
            fields:{
                timetracking:{
                    timeSpentSeconds:Date.now() - this.state.start
                }
            }
          }
        const issue = {
            issueId:this.props.id,
            issue:issueNew
          }
          ipcRenderer.send('editIssue', issue)}
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