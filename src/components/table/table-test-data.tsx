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
        ],
        status: ['In progress', 'Open', 'Closed', 'Stalled', 'Internal review', 'Client review']
    };

    moveCard(data: any, newList: any) {
        for (let i in this.state.data) {
            if (this.state.data[i].id == data.cardId) {
                 this.setState({data: update(this.state.data, {[i]:{status:{$set:newList}}})});
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
        const issues = this.state.data.filter(item => item.status == status);
        return issues.map((i?: any) =>
            <Draggable DragCard={this.onDragCard} key={i.id} id={i.id} issue={i.issue}></Draggable >
        )
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