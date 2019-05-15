import * as React from 'react';
import { IoIosTimer } from 'react-icons/io';
import { MdPause } from 'react-icons/md';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from '../../base-classes';
import SearchPopUp from './../search-pop-up/search-pop-up'
const { ipcRenderer } = require('electron');

interface MainTimerProperties extends ComponentBaseProperties {
    id?: number
}
interface MainTimerState extends ComponentBaseState {
}
export default class MainTimer extends ComponentBase<MainTimerProperties, MainTimerState>{
    state = {
        time: 0,
        start: 0,
        isStart: true,
        isStop: false,
        isBottomBar: false,
        isSearchPopUp: false
    }
    startTimer() {
        this.setState({
            start: Date.now(),
            isStart: false,
            isStop: true,
        })
        this.setState({
            isBottomBar: true
        })

    }
    renderTimerBar() {
            return (
                <div className='timer-search-bar'>
                    {this.props.name? this.props.name : 'Where to sign this time?' }
                    <MdPause className={
                        this.state.isStop ? 'display' : 'display-none'
                    }
                        onClick={() => this.stopTimer()} />
                    {this.state.time ? `you've worked ${this.state.time / 3600000} hours` : ''}
                    <button className='main-btn' onClick={() => this.handleCloseTimeBar()}>close time bar</button>
                </div>
            )
    }
    stopTimer() {
        this.setState({ time: Date.now() - this.state.start })
        this.setState({
            isStart: true,
            isStop: false
        })
        const conf = confirm('Would you like to save time?');
        if (conf) {
            const issueNew = {
                fields: {
                    timetracking: {
                        timeSpentSeconds: Date.now() - this.state.start
                    }
                }
            }
            if (this.props.id) {
                const issue = {
                    issueId: this.props.id,
                    issue: issueNew
                }
                ipcRenderer.send('editIssue', issue);
                alert('your time is saved');
                this.handleCloseTimeBar()
            } else {
                this.setState({isSearchPopUp:true})
            }
        }
    }
    closePopUp = () => {
        this.setState({ isSearchPopUp: false })
    }
    mainRender = () => {
        if (this.state.isBottomBar) {
            return this.renderTimerBar()
        } else {
            return (
                <div className="main-timer">
                    <IoIosTimer className={
                        this.state.isStart ? 'display' : 'display-none'
                    } onClick={() => this.startTimer()} />
                </div>)

        }
    }
    handleCloseTimeBar() {
        this.setState({
            isBottomBar: false,
            isStart: true,
        })
    }
    public render() {
        const style = {
            display: 'flex',
            alignItems: 'center'
        }
        return (
            <div style={style}>
                {this.mainRender()}
                {this.state.isSearchPopUp ? <SearchPopUp handleClose={this.closePopUp} /> : ''}
            </div>
        )
    }
}