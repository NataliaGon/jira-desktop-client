import * as React from "react";

const { ipcRenderer } = require('electron')
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";


interface UserProperties extends ComponentBaseProperties {

}
interface UserState extends ComponentBaseState {
 
}

export class User extends ComponentBase<UserProperties, UserState>{
    state = {
      user:{}
    }
    public render() {
        ipcRenderer.on('user', (event: any, user: any) => {
            this.setState({ user: user})
        })
        return (
         <div className="user-container">
          <h3> {this.state.user.displayName} </h3>
          <h3>  {this.state.user.emailAddress} </h3>
         </div>
        )
    }

}