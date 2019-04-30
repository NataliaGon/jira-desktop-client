import * as React from "react";
import Draggable from '../issue/issue';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";
const { ipcRenderer } = require('electron');
var update = require('react-addons-update');


interface TableDProperties extends ComponentBaseProperties {

}
interface TableDState extends ComponentBaseState {

}

export class TableD extends ComponentBase<TableDProperties, TableDState>{
    state = {
        status: ['In progress', 'Open', 'Closed', 'Stalled', 'Internal review', 'Client review']
    };

    componentDidMount() {
        ipcRenderer.on('issues', (event: any, data: any) => {
            this.setState({ issues: data })
        })
    }
    moveCard(data: any, newList: any) {
        // for (let i in this.state.data) {
        //     if (this.state.data[i].id == data.cardId) {
        //         this.setState({ data: update(this.state.data, { [i]: { status: { $set: newList } } }) });
        //     }
        // }
        for (let i in this.state.issues.issues[0].issues){
            console.log(i);
            if ( this.state.issues.issues[0].issues[i].id == data.cardId){
                console.log(i.fields.status.name);
                this.setState({ issues: update(this.state.issues.issues[0].issues, { [i]:{fields:{status:{name: { $set: newList }}}}})});
            } 
        }

    }
    getIssue = (id: any) => {
        for (let i of this.state.allIssues) {
            if (i.id == id) {
                return i
            }
        }
    }
    onDragOver = (e: any) => {
        e.preventDefault();
    }
    onDrop = (e: any) => {
        const newList = e.currentTarget.id;
        e.preventDefault();
        const data = JSON.parse(e.dataTransfer.getData("text"));
        this.moveCard(data, newList);
    }
    onDragCard = (e: any) => {
        const data = {
            cardId: e.currentTarget.id,
            oldlistId: e.currentTarget.parentElement.id
        }
        e.dataTransfer.setData('text', JSON.stringify(data));
    }
    getIssues = (status?: string) => {
        if (this.state.issues) {
            const issues = this.state.issues.issues[0].issues.filter(item => item.fields.status.name==status);
            return issues.map((i?: any) =>
            <Draggable DragCard={this.onDragCard} key={i.id} id={i.id} issue={i.key}></Draggable >
        )
        }
    }
    mainRender = () => {
        return this.state.status.map((item?: any) =>
            <div className="droppable-container" key={item} onDragOver={(e: any) => this.onDragOver(e)} onDrop={(e: any) => this.onDrop(e)} id={item}>
                <h3>{item}</h3>
                {this.getIssues(item)}
            </div>
        )

    }

    public render() {
        return (
            <div className="table">
                {this.mainRender()}
            </div>

        )
    }
}