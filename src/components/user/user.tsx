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
   
    getUser=()=>{

   console.log(this.state.user.displayName);
    }

    public render() {
        ipcRenderer.on('user', (event: any, user: any) => {
            this.setState({ user: user})
            console.log(user);
        })
        this.getUser()
        return (
         <div className="user-container">
          <h3> {this.state.user.displayName} </h3>
          <h3>  {this.state.user.emailAddress} </h3>
         </div>
        )
    }

}