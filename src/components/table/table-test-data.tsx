import * as React from "react";
import Draggable from '../draggable-box/draggable-box';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";
// import update from 'react-addons-update';
var update = require('react-addons-update');


interface TableDProperties extends ComponentBaseProperties {

}
interface TableDState extends ComponentBaseState {

}

export class TableD extends ComponentBase<TableDProperties, TableDState>{
    state = {
        data: [
            { issue: 'img', id: '1', priority: 'medium', status: 'In progress', duedate: '2018-12-30', created: '2019-01-03T12:03:15.000+0000' },
            { issue: 'animation', id: '2', priority: 'medium', status: 'Open', duedate: '2019-01-30', created: '2019-01-04T12:03:15.000+0000' },
            { issue: 'react', id: '3', priority: 'low', status: 'Closed', duedate: '2018-12-30', created: '2017-01-03T12:03:45.000+0000' },
            { issue: 'electron', id: '4', priority: 'medium', status: 'Stalled', duedate: '2018-08-15', created: '2017-01-03T12:03:15.000+0000' },
            { issue: 'site1', id: '5', priority: 'high', status: 'Internal review', duedate: '2018-10-27', created: '2019-02-03T12:03:15.000+0000' },
            { issue: 'site2', id: '6', priority: 'low', status: 'Client review', duedate: '2019-12-25', created: '2018-04-03T12:03:15.000+0000' },
            { issue: 'site1', id: '7', priority: 'high', status: 'Open', duedate: '2017-12-30', created: '2019-02-03T12:05:55.000+0000' }
        ]
    };

    moveCard(data: any, newList: any) {
        for (let i in this.state.data) {
            if(this.state.data[i].id == data.cardId){
                console.log(this.state.data[i].id);
                console.log(data.cardId);
                console.log(newList);
                let state = this.state.data;
                state[i].status=newList
                // this.state.data[i].status = newList;
                console.log(state);
                this.setState({data:state});
                // this.forceUpdate()
                // this.setState({data:update(this.state.data, {i:{status:{$set:newList}}})});
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
        console.log(newList);
        e.preventDefault();
        const data = JSON.parse(e.dataTransfer.getData("text"));
        console.log(data);
        this.moveCard(data, newList);
    }
    onDragCard = (e: any) => {
        const data = {
            cardId: e.currentTarget.id,
            oldlistId: e.currentTarget.parentElement.id
        }
        console.log(data);
        e.dataTransfer.setData('text', JSON.stringify(data));
    }
    getIssues =(status?:string)=>{
        const issues = this.state.data.filter(item => item.status == status);
        return issues.map((i?: any)=> 
        <Draggable DragCard={this.onDragCard} key={i.id} id={i.id} issue={i.issue}></Draggable >
        )
    } 

    public render() {

        return (
            <div className="table">
                <div className="droppable-container" onDragOver={(e: any) => this.onDragOver(e)} onDrop={(e: any) => this.onDrop(e)} id={'Open'}>
                    <h3>Open</h3>
                    {this.getIssues('Open')}

                </div>
                <div className="droppable-container" onDragOver={(e) => this.onDragOver(e)} onDrop={(e: any) => this.onDrop(e)} id={'In progress'}>
                    <h3>In progress</h3>
                    {this.getIssues('In progress')}
                </div>
                <div className="droppable-container" onDragOver={(e) => this.onDragOver(e)} onDrop={(e: any) => this.onDrop(e)} id={'Stalled'}>
                    <h3>
                        Stalled</h3>
                        {this.getIssues('Stalled')}
                </div>
                <div className="droppable-container" onDragOver={(e) => this.onDragOver(e)} onDrop={(e: any) => this.onDrop(e)} id={'Internal review'}>
                    <h3>
                        Internal review</h3>
                        {this.getIssues('Internal review')}
                </div>
                <div className="droppable-container" onDragOver={(e) => this.onDragOver(e)} onDrop={(e: any) => this.onDrop(e)} id={'Client review'} >
                    <h3>
                        Client review
                    </h3>
                    {this.getIssues('Client review')}
                </div>
                <div className="droppable-container" onDragOver={(e) => this.onDragOver(e)} onDrop={(e: any) => this.onDrop(e)} id={'Closed'} >
                    <h3>
                        Closed
                    </h3>
                    {this.getIssues('Closed')}
                </div>
            </div>

        )
    }
}