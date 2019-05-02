import * as React from "react";
const { ipcRenderer } = require('electron')
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";
import { Form } from "../form-autorization/form";


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
    changeUser = () => {
        this.setState({ user: false });
        this.newRender()
    }
    handleCancel = () => {
        if (!this.state.user) {
            this.setState({ user: true });
            this.newRender()
        }
    }
    newRender = () => {
        const html = (this.state.user) ? <button className="btn-autorization" onClick={this.changeUser} >changeUser</button> : <Form handleCancel={this.handleCancel}/>
        return html
    }

    public render() {
        return (
            <div>
                {this.newRender()}
            </div>
        )
    }
}