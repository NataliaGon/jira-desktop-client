import * as React from 'react';
import { GoPin } from 'react-icons/go';
import { connect } from 'react-redux';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from '../../base-classes';
import { toPin } from './issue.actions';

interface IssueEditProperties extends ComponentBaseProperties {
  DragCard?: any,
  issue?: any,
  id?: any
}
interface IssueEditState extends ComponentBaseState {
  pin?: boolean
}

export class IssueEdit extends ComponentBase<IssueEditProperties, IssueEditState>{
  state = {
    pin: false
  }


  public render() {
 console.log(this.props);
    return (
      <div className="edit-issue"  id={this.props.issue.id}>
      <h5>{this.props.issue.project}</h5>
      <h5>{this.props.issue.creator}</h5>
      <h5>{this.props.issue.projectKey}</h5>
      <h5>{this.props.issue.epicName}</h5>
      <h5>{this.props.issue.epicLink}</h5>
      <h5>{this.props.issue.priority}</h5>
      <h5>{this.props.issue.reporter}</h5>
      <h5>{this.props.issue.assignee}</h5>
      <h5>{this.props.issue.created}</h5>
        {this.props.issue.issue} <br/>
        {this.props.issue.title} 
        <div className="due-date">
        
          <span className="bold">due date </span>{this.props.issue.dueDate}</div>
          <div className="issue-creator">
          {this.props.issue.creator}
          </div>
        <div className="pin-icon-wrapper" onClick={() => this.props.toPin(this)}><GoPin /></div>
      </div>
    )
  }

}


