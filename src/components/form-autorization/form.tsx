import * as React from "react";
const { ipcRenderer } = require('electron')
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";


interface FormProperties extends ComponentBaseProperties {
    handleCancel?:any
}
interface FormState extends ComponentBaseState {
    name?: string;
    password?: string; 
}

export class Form extends ComponentBase<FormProperties, FormState>{
    state = {
        name: '',
        password: '',
    }

    handleChangeName = (event: any) => {
        event.preventDefault();
        this.setState({ name: event.target.value });
    }
    handleChangePassw = (event: any) => {
        event.preventDefault();
        this.setState({ password: event.target.value });
    }
    handleSubmit = (event: any) => {
        event.preventDefault();
        (this.state.name.length > 0 && this.state.password.length > 0) ? this.sendUser() : console.log('EMPTY USER AUTORIZATION')
    }

    sendUser = () => {
        const user = {
            name: this.state.name,
            password: this.state.password
        }
        ipcRenderer.send('hello-jira', user);
    }
  
    public render() {
        return (
          
            <div>
                <form action="">
                    <label>User name</label><br />
                    <input id="user-name" type="text" name="userName" onChange={this.handleChangeName} /><br /><br />
                    <label>Password</label><br />
                    <input id="password" type="text" name="userAge" onChange={this.handleChangePassw} /><br /><br />
                    <button className="btn-autorization" id="submit" type="submit" onClick={this.handleSubmit}>
                        Get Jira
                    </button>
                    <button className="btn-autorization"  onClick={()=>this.props.handleCancel()}>
                        Cansel
                    </button>
                </form>
            </div>
        )
    }
}