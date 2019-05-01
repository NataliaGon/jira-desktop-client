import * as React from 'react';
import { GoPin } from 'react-icons/go';
import { connect } from 'react-redux';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from '../../base-classes';
import { toPin } from './issue.actions';

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
    pin: false
  }


  public render() {

    return (
      <div className="draggable-box" draggable onDragStart={(e: any) => this.props.DragCard(e)} id={this.props.id}>
        {this.props.issue} <br/>
        {this.props.title} 
        <div className="due-date">
        
          <span className="bold">due date </span>{this.props.dueDate}</div>
          <div className="issue-creator">
          {this.props.creator}
          </div>
        <div className="pin-icon-wrapper" onClick={() => this.props.toPin(this)}><GoPin /></div>
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
