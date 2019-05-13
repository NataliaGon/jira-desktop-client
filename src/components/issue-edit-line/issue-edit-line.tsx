import * as React from 'react';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from '../../base-classes';
const { ipcRenderer } = require('electron');

interface EditableLineProperties extends ComponentBaseProperties {
    text?: string,
    id?:number,
    name?:string
}
interface EditableLineState extends ComponentBaseState {

}

export default class EditableLine extends ComponentBase<EditableLineProperties, EditableLineState>{
    state = {
        isNameHidden: false,
        isInputeHidden: true
    }
    componentDidUpdate() {
        if (this.textInput) {
            this.focus();
        }
    }
    focus = () => {
        this.textInput.focus();
    }
    toogleSpanInput = () => {
        this.setState({ isNameHidden: !this.state.isNameHidden });
        this.setState({ isInputeHidden: !this.state.isInputeHidden });
    }
    
    getIssueToChange =(name?:string, value?:string )=>{
        const  f={
            fields:{}
        }
        f.fields[name]=value
        return f
    }

    public render() {
        const spanClass = (this.state.isNameHidden ? "display-none" : "");
        const inputClass = (this.state.isInputeHidden ? "display-none" : "");
        return (
            <div> <span className={spanClass} onClick={() => { this.toogleSpanInput() }}>{this.props.text}</span>
                <input
                    className={inputClass}
                    type="text"
                    defaultValue={this.props.text}
                    onClick={() => this.toogleSpanInput()}
                    ref={input => {
                        this.textInput = input;
                    }}
                    onBlur={() => {
                        console.log(this.getIssueToChange(this.props.name, this.textInput.value));
                          const issue = {
                            issueId:this.props.id,
                            issue:this.getIssueToChange(this.props.name, this.textInput.value)
                          }
                         console.log(issue);
                          ipcRenderer.send('editIssue', issue)
                        this.toogleSpanInput();
                    }}
                    onKeyDown={e => {
                        if (e.keyCode === 13) {
                            this.textInput.blur();
                        }
                    }}
                />
            </div>
        )
    }
}