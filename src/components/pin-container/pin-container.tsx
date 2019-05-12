import * as React from "react";
import { connect } from 'react-redux';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";
import PinIssue from '../pin-issue/pin-issue';
import { GoPin } from 'react-icons/go';
import { TiDelete } from 'react-icons/ti';


interface PinContainerProperties extends ComponentBaseProperties {
  DragCard?: any,
  issue?: any,
  id?: any,
  open?: boolean
}
interface PinContainerState extends ComponentBaseState {

}

class PinContainer extends ComponentBase<PinContainerProperties, PinContainerState>{

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  state = {
    open: false,
    shouldAnimate:false
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ shouldAnimate: true });
    }
  }
  
  pinRender = () => {
    if (this.state.open) {
      return <div className="pin-container">{this.pinIssues()}</div>
    }
    else {
      return <div className={
        this.state.shouldAnimate ? "pin-icon rotate-scale-up no-opacity":this.props.pin.length>0? "no-opacity pin-icon":"pin-icon"
      }  onAnimationEnd={() => this.setState({ shouldAnimate: false })} ><GoPin onClick={() => this.openPin()}
      /></div>
    }

  }

  openPin = () => {
    this.setState({ open: !this.state.open })
  }
  pinIssues = () => {
    if (this.props.pin.length > 0) {
      const issues = this.props.pin.map(issue => (
        <PinIssue key={issue.id} issue={issue} />
      ))
      return <div>{issues}
        <span className="icon-close">{<TiDelete onClick={() => this.openPin()} />}</span></div>
    }
    else {
      return <div>You haven't pin anything yet  <div className="icon-close">{<TiDelete onClick={() => this.openPin()} />}</div></div>
    }
  }

  public render() {

    return (
      <div className="pin-container-icon">
        {this.pinRender()}
      </div>

    )
  }

function mapStateToProps(store: any) {
  return {
    pin: store.pin.pin
  }
}

export default connect(
  mapStateToProps,
  {}
)(PinContainer);