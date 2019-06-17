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
    componentDidMount(){
        ipcRenderer.on('user', (event: any, user: any) => {
            this.setState({ user: user})
        })
    }
    public render() {

        return (
         <div className="user-container">
             {this.state.user? <div><h3>{this.state.user.displayName}</h3>
             <h3>  {this.state.user.emailAddress} </h3></div>:<h3>No user log in</h3>}
         </div>
        )
    }

}