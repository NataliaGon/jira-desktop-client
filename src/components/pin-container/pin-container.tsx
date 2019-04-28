import * as React from "react";
import { connect } from 'react-redux';

import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";
import PinIssue from '../pin-issue/pin-issue'; 

interface PinContainerProperties extends ComponentBaseProperties {
  DragCard?: any,
  issue?: any,
  id?: any
}
interface PinContainerState extends ComponentBaseState {

}

class PinContainer extends ComponentBase<PinContainerProperties, PinContainerState>{

  pinIssues = () => {
    if (this.props.pin.length>0){
    return this.props.pin.map(issue => (
      <PinIssue key={issue.id} issue ={issue.issue}/>
     
    ))
    }else{
      return  "You wanna pin something?"
    }
  }
  public render() {
    return (
      <div className="pin-container">
        {this.pinIssues()}
      </div>
    )
  }
}

function mapStateToProps(store: any) {
  return {
    pin: store.pin.pin
  };
}

export default connect(
  mapStateToProps,
  {}
)(PinContainer);