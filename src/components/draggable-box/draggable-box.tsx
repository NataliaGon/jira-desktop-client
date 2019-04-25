import * as React from 'react';
// import ItemTypes from './drag-drop-type'
import { FaMapPin } from 'react-icons/fa';
import { connect } from 'react-redux';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from '../../base-classes';
import {toPin} from './issue.actions';

interface DraggableProperties extends ComponentBaseProperties {
  DragCard?: any,
  issue?: any,
  id?: any
}
interface DraggableState extends ComponentBaseState {
  pin?:boolean
}

 class Draggable extends ComponentBase<DraggableProperties, DraggableState>{
  state = {
     pin:false
  }


  public render() {
    // const knightSource = {
    //     beginDrag(props) {
    //       return {
    //         pieceId: props.id 
    //       }
    //     },
    //   }

    return (
      <div className="draggable-box" draggable onDragStart={(e: any) => this.props.DragCard(e)} id={this.props.id}>
        {this.props.issue}

        <div className="pin-icon-wrapper"><FaMapPin /></div>

      </div>


      // <div className="draggable-box" >
      // {this.props.issue}
      // </div>
    )
  }

}

function mapStateToProps(store:any) {
  return {
    store:store.pin
  };
}

export default connect(
  mapStateToProps,
  {toPin}
)(Draggable);
