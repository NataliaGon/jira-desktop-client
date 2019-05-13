import * as React from 'react';
import { GoPin } from 'react-icons/go';
import { connect } from 'react-redux';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from '../../base-classes';
import { toPin } from '../issue/issue.actions';
import { MdModeEdit } from 'react-icons/md';
import { TiDelete } from 'react-icons/ti';
const { ipcRenderer } = require('electron');

interface IssueEditProperties extends ComponentBaseProperties {
  DragCard?: any,
  issue?: any,
  id?: any
}
interface IssueEditState extends ComponentBaseState {
  pin?: boolean
}

class IssueEdit extends ComponentBase<IssueEditProperties, IssueEditState>{
  state = {
    pin: false,
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
  };

  toogleSpanInput =()=>{
    this.setState({isNameHidden:!this.state.isNameHidden});
    this.setState({isInputeHidden:!this.state.isInputeHidden});
  }

  public render() {
    console.log(this.props.issue);
    const spanClass =  (this.state.isNameHidden ? "display-none" : "");
    const inputClass = (this.state.isInputeHidden ? "display-none": "");

    return (
      <div className="edit-issue" id={this.props.issue.id}>
        <div>
          <h5>{this.props.issue.fields.project.name}</h5>
          <h5>{this.props.issue.fields.creator.displayName}</h5>
          <h5>{this.props.issue.fields.project.key}</h5>
          {/* <h5>{this.props.issue.fields.epic.name}</h5> */}
          {/* <h5>{this.props.issue.fields.epic.self}</h5> */}
          <h5>{this.props.issue.fields.priority.name}</h5>
          <h5>{this.props.issue.fields.displayName}</h5>
          <h5>{this.props.issue.fields.assignee.displayName}</h5>
          <h5>{this.props.issue.fields.created}</h5>
          {this.props.issue.key} <br />
         <span  className={spanClass} onClick={()=>{this.toogleSpanInput()}}>{this.props.issue.fields.summary}</span> 
         <input
            className={inputClass}
            type="text"
            defaultValue={this.props.issue.title}
            onClick={() => this.toogleSpanInput()}
            ref={input => {
              this.textInput = input;
            }}
            onBlur={() => {
              // this.props.changeTitle(this.textInput.value);
              console.log(this.props.issue);
              this.props.issue.fields.summary = this.textInput.value;
              console.log(this.props.issue);
              const issue = {
                issueId:this.props.issue.id,
                issue:this.props.issue
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
          <div className="due-date">
            <span className="bold">due date </span>{this.props.issue.fields.duedate}</div>
          <div className="issue-creator">
            {this.props.issue.fields.creator.displayName}
          </div>
        </div>
        <div className="edit-issue-icons-container">
          <div > <TiDelete onClick={() => this.props.closeWindow()}>Cansel</TiDelete></div>
          <div onClick={() => this.props.toPin(this.props.issue)}><GoPin /></div>
          <MdModeEdit />
        </div>
      </div>
    )
  }

}



export default connect(
  null,
  { toPin }
)(IssueEdit);
