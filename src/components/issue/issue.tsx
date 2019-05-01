import * as React from 'react';
import { GoPin } from 'react-icons/go';
import { TiDelete } from 'react-icons/ti';
import { MdModeEdit } from 'react-icons/md';
import { connect } from 'react-redux';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from '../../base-classes';
import { toPin } from './issue.actions';
import { IssueEdit } from '../issue-edit/issue-edit';

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


  handleEdit = () => {
    console.log('edit');
    this.setState({ edit: !this.state.edit });
  }

  public render() {

    return (
      <div>
        {this.state.edit ? <IssueEdit issue={this.props.issue} /> : ''}
        <div className="draggable-box" draggable onDragStart={(e: any) => this.props.DragCard(e)} id={this.props.issue.id}>
          {this.props.issue.issue} <br />
          {this.props.issue.title}
          <div className="due-date">

            <span className="bold">due date </span>{this.props.issue.dueDate}</div>
          <div className="issue-creator">
            {this.props.issue.creator}
          </div>
          <div className="pin-icon-wrapper" onClick={() => this.props.toPin(this)}><GoPin /></div>
          <MdModeEdit onClick={() => this.handleEdit(this)}> edit</MdModeEdit>
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
