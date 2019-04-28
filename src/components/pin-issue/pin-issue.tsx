import * as React from "react";
import { connect } from 'react-redux';
import { TiDelete } from 'react-icons/ti';
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
            <li className="pin-issue" >{this.props.issue}<TiDelete 
            onClick={()=>this.props.deletePin(this)}
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