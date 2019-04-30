import * as React from "react";
import { connect } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";
import {deletePin} from './pin-issue.actions'

interface PinIssueProperties extends ComponentBaseProperties {
 issue?:any
}
interface PinIssueState extends ComponentBaseState {

}

class PinIssue extends ComponentBase<PinIssueProperties, PinIssueState>{
    public render() {
        return (
            <li className="pin-issue" >{this.props.issue.issue}<FaTrashAlt
            onClick={()=>this.props.deletePin(this.props.issue.id)}
            /></li>
        )
      }
    }
    
    function mapStateToProps(store: any) {
      return {
       
      };
    }
    
    export default connect(
      mapStateToProps,
      {deletePin}
    )(PinIssue);