import * as React from "react";
import Draggable  from '../draggable-box/draggable-box';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";


interface TableProperties extends ComponentBaseProperties {

}
interface TableState extends ComponentBaseState {

}

export class Table extends ComponentBase<TableProperties, TableState>{
    state = {
        data: {
            open: [
                { issue: 'img', id: '1', idC: 'open' },
                { issue: 'animation', id: '2', idC: 'open' }
            ],
            inProgress: [
                { issue: 'react', id: '3', idC: 'inProgress' },
                { issue: 'electron', id: '4', idC: 'inProgress' }
            ],
            close: [
                { issue: 'site1', id: '5', idC: 'close' },
                { issue: 'site2', id: '6', idC: 'close' }
            ],
            urgent: [
                { issue: 'site1', id: '7', idC: 'urgent' },
                { issue: 'site2', id: '8', idC: 'urgent' }
            ]
        }
        allIssues: [
            { issue: 'img', id: '1', idC: 'open' },
            { issue: 'animation', id: '2', idC: 'open' },
            { issue: 'react', id: '3', idC: 'inProgress' },
            { issue: 'electron', id: '4', idC: 'inProgress' },
            { issue: 'site1', id: '5', idC: 'close' },
            { issue: 'site2', id: '6', idC: 'close' },
            { issue: 'site1', id: '7', idC: 'urgent' },
            { issue: 'site2', id: '8', idC: 'urgent' }
        ]
    };

    moveCard(data: any, newList: any) {
        for (let i in this.state.data) {
            if (i == data.oldlistId) {
                let filteredData = this.state.data[i].filter((j?: any) => j.id !== data.cardId)
                let state = this.state;
                state.data[i] = filteredData
                this.setState({ state: state });
            }
        }
 
        let state = this.state;
        state.data[newList].push(this.getIssue(data.cardId));
        this.setState({ state: state });
    }
    getIssue =(id:any)=> {
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
    getContainers = (data: any) => {
        return data.map((i: any) =>
            <Draggable  DragCard={this.onDragCard} key={i.id} id={i.id} issue={i.issue}></Draggable >
        )
    }

    public render() {

        return (
            <div className="table">
                <div className="droppable-container" onDragOver={(e: any) => this.onDragOver(e)} onDrop={(e: any) => this.onDrop(e)} id={'open'}>
                    <h3>open</h3>
                    {this.getContainers(this.state.data.open)}
                </div>
                <div className="droppable-container" onDragOver={(e) => this.onDragOver(e)} onDrop={(e: any) => this.onDrop(e)} id={'inProgress'}>
                    <h3>in progress</h3>
                    {this.getContainers(this.state.data.inProgress)}
                </div>
                <div className="droppable-container" onDragOver={(e) => this.onDragOver(e)} onDrop={(e: any) => this.onDrop(e)} id={'urgent'}>
                    <h3>
                        internal review</h3>
                    {this.getContainers(this.state.data.urgent)}
                </div>
                <div className="droppable-container" onDragOver={(e) => this.onDragOver(e)} onDrop={(e: any) => this.onDrop(e)} id={'close'} >
                    <h3>
                        close
                    </h3>
                    {this.getContainers(this.state.data.close)}
                </div>
            </div>
         
        )
    }
}