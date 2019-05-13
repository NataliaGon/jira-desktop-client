import * as React from 'react';
import { GoPin } from 'react-icons/go';
import { TiDelete } from 'react-icons/ti';

import { FaEye} from "react-icons/fa";
import { connect } from 'react-redux';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from '../../base-classes';
import { toPin } from './issue.actions';
import IssueEdit  from '../issue-edit/issue-edit';

interface DraggableProperties extends ComponentBaseProperties {
  DragCard?: any,
  issue?: any,
  id?: any
}
interface DraggableState extends ComponentBaseState {
  pin?: boolean
}

class Draggable extends ComponentBase<DraggableProperties, DraggableState>{
  state = {
    pin: false,
    edit: false
  }


  watchMore = () => {
    this.setState({ edit: !this.state.edit });
  }
   

  public render() {
console.log(this.props.issue);
    return (
      <div>
        {this.state.edit ? <IssueEdit closeWindow={this.watchMore} issue={this.props.issue} /> : ''}
        <div className="draggable-box" draggable onDragStart={(e: any) => this.props.DragCard(e)} id={this.props.issue.id}>
          {this.props.issue.key} <br />
          {this.props.issue.fields.summary}
          <div className="due-date">
            <span className="bold">due date </span>{this.props.issue.fields.duedate}</div>
          <div className="issue-creator">
            {this.props.issue.fields.creator.displayName}
          </div>
          <div className="pin-icon-wrapper" onClick={() => this.props.toPin(this.props.key)}><GoPin/></div>
          <FaEye onClick={() => this.watchMore(this)}/>  
        </div>
      </div>
    )
  }

}

function mapStateToProps(store: any) {
  return {
    store: store.pin
  };
}

export default connect(
  mapStateToProps,
  { toPin }
)(Draggable);
