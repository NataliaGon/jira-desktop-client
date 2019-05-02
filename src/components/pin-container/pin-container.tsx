import * as React from "react";
import { connect } from 'react-redux';


import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";
import PinIssue from '../pin-issue/pin-issue';
import { GoPin } from 'react-icons/go';
import { TiDelete } from 'react-icons/ti';

var classNames = require('classnames');

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
    // reRender: false
  }

  // componentWillUpdate(nextProps, nextState) {
  //   if (nextProps !== this.props) {
  //     this.setState({ reRender: true })
  //   }
  // }
  componentDidUpdate(prevProps) {
    console.log('now');
    if (prevProps !== this.props) {
      // this.changeNode()
    }
  }
  changeNode = () => {
    const classUpd = classNames({
      'pin-icon': true,
      'no-opacity': true

    })

    this.myRef.current.className = classUpd;
    return this.myRef.current

  }
  pinRender = () => {
    if (this.state.open) {
      return <div className="pin-container">{this.pinIssues()}</div>
    }
    else {
      let classes
      if (this.props.pin.length > 0) {
        classes = classNames({
          'pin-icon': true,
          'no-opacity': true,
          'rotate-scale-up': true
        })
      } else {
        classes = classNames({
          'pin-icon': true
        })
      }
      return <div className={classes} ref={this.myRef} ><GoPin onClick={() => this.openPin()}
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