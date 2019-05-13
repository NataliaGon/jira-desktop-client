import * as React from "react";
import { connect } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";
import { FaEye } from "react-icons/fa";
import { deletePin } from './pin-issue.actions';
import IssueEdit  from '../issue-edit/issue-edit';



interface PinIssueProperties extends ComponentBaseProperties {
  issue?: any
}
interface PinIssueState extends ComponentBaseState {

}

class PinIssue extends ComponentBase<PinIssueProperties, PinIssueState>{
  state={
    edit:false
  }
  watchMore = () => {
    this.setState({ edit: !this.state.edit });
  }

  public render() {
    console.log(this.props.issue);
    return (
      <div>
        {this.state.edit ? <IssueEdit closeWindow={this.watchMore} issue={this.props.issue} /> : ''}
        <li className="pin-issue" >{this.props.issue.key} <span className="icon-delete-pin">
          <FaEye onClick={() => this.watchMore(this)} />
          <FaTrashAlt
            onClick={() => this.props.deletePin(this.props.issue.id)}
          /></span></li>
      </div>
    )
  }
}



export default connect(
  null,
  { deletePin }
)(PinIssue);