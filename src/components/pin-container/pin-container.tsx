import * as React from "react";
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";
import { connect } from 'react-redux';

interface PinContainerProperties extends ComponentBaseProperties {
  DragCard?: any,
  issue?: any,
  id?: any
}
interface PinContainerState extends ComponentBaseState {

}

class PinContainer extends ComponentBase<PinContainerProperties, PinContainerState>{

  pinIssues = () => {
    return this.props.pin.map(issue => (
      <li className="pin-issue" key={issue.id}>{issue.issue}</li>
    ))
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