import * as React from "react";


import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";
import { Draggable } from '../draggable-box/draggable-box';


interface TableProperties extends ComponentBaseProperties {

}
interface TableState extends ComponentBaseState {

}

export class Table extends ComponentBase<TableProperties, TableState>{
    state = {
        data: {
            open: [
                { issue: 'img', id: '1' },
                { issue: 'animation', id: '2' }
            ],
            inProgress: [
                { issue: 'react', id: '3' },
                { issue: 'electron', id: '4' }
            ],
            close: [
                { issue: 'site1', id: '5' },
                { issue: 'site2', id: '6' }
            ],
            urgent: [
                { issue: 'site1', id: '7' },
                { issue: 'site2', id: '8' }
            ]
        }
    }

    onDragOver = (e: any) => {
        e.preventDefault();
    }
    onDrop =(e:any)=>{
        e.preventDefault();
        // const toListId = ev.currentTarget.dataset.id;
        const data = JSON.parse(e.dataTransfer.getData("text"));
        console.log(data);
        // moveCard(data.fromListId, toListId, data.cardId);
    } 
    onDragCard =(e:any) =>{
        console.log( e.target )
        // const listId = ev.currentTarget.dataset.listId;
        // const cardData =
        //   {
        //     cardId: cardId,
        //     fromListId: listId
        //   };
        e.dataTransfer.setData('text', JSON.stringify('14'));
    }
    getContainers = (data: any) => {
        return data.map((i: any) =>
            <div className="draggable-box" draggable onDragStart={(e:any) => this.onDragCard(e)} key={i.id}>{i.issue}</div>
        )
    }

    public render() {
        return (
            <div className="table">
                <div className="droppable-container" onDragOver={(e:any) => this.onDragOver(e)} onDrop={(e:any) =>this.onDrop(e)}>
                    <h3>open</h3>
                    {this.getContainers(this.state.data.open)}
                </div>
                <div className="droppable-container" onDragOver={(e) => this.onDragOver(e)} onDrop={(e:any) =>this.onDrop(e)}>
                    <h3>in progress</h3>
                    {this.getContainers(this.state.data.inProgress)}
                </div>
                <div className="droppable-container" onDragOver={(e) => this.onDragOver(e)} onDrop={(e:any) =>this.onDrop(e)}>
                    <h3>urgent</h3>
                    {this.getContainers(this.state.data.urgent)}</div>
                <div className="droppable-container" onDragOver={(e) => this.onDragOver(e)} onDrop={(e:any) =>this.onDrop(e)}>
                    <h3>close</h3>
                    {this.getContainers(this.state.data.close)}</div>
            </div>

        )
    }

}