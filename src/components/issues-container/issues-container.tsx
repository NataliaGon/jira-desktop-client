import * as React from "react";

const { ipcRenderer } = require('electron')
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";


interface IssuesProperties extends ComponentBaseProperties {

}
interface IssuesState extends ComponentBaseState {
 
}

export class Issues extends ComponentBase<IssuesProperties, IssuesState>{
    state = {
        issues:{}
    }
    public render() {
        ipcRenderer.on('issues', (event: any, issues: any) => {
            this.setState({ issues: issues})
        })
        return (
         <div className="user-container">
        
         </div>
        )
    }

}