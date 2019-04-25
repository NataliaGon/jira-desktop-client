import * as React from "react";
const { ipcRenderer } = require('electron')
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";
import {Form} from "../autoriz-form/form";


interface FormAutorProperties extends ComponentBaseProperties {

}
interface FormAutorState extends ComponentBaseState {
    name?: string;
    password?: string;
    user?: boolean
}

export class FormAutor extends ComponentBase<FormAutorProperties, FormAutorState>{
    state = {
        name: '',
        password: '',
        user: false
    }
    componentDidMount() {
        console.log('did Mount');
        ipcRenderer.send('check-user');
        ipcRenderer.on('login', (event: any, user: any) => {
            this.setState({ user: user })
        })
      
    }
    changeUser=()=>{
        this.setState({user: false});
        {this.handleRender()}
    }
    handleRender = () => {
    const html= (this.state.user) ?  <button onClick={this.changeUser}>changeUser</button> : <Form /> 
    return html
    }
    
    public render() {
        return (
            <div>
            {this.handleRender()}
            </div>
        )
    }
}