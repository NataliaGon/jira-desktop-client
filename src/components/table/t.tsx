import * as React from "react";
import { connect } from 'react-redux';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";
const { ipcRenderer } = require('electron');
import IssueStatusColumn from './issue-status-column'


interface TProperties extends ComponentBaseProperties {

}
interface TState extends ComponentBaseState {

}

class T extends ComponentBase<TProperties, TState>{
    state = {
        status: ['In progress', 'Open', 'Closed', 'Stalled', 'Internal review', 'Client review']
    };

    componentDidMount() {
        ipcRenderer.on('issues', (event: any, data: any, boardId: number) => {
            this.setState({
                issues: data,
                boardId: boardId
            })
        });

    }

    moveCard(data: any, newList: any) {
        for (let i in this.state.issues.issues[0].issues) {
            if (this.state.issues.issues[0].issues[i].id == data.cardId) {
                const state = this.state.issues;
                state.issues[0].issues[i].fields.status.name = newList;
                this.setState({ issues: state });
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

    mainRender = () => {
        return this.state.status.map((item?: any) =>
            <div className="droppable-container" key={item} onDragOver={(e: any) => this.onDragOver(e)} onDrop={(e: any) => this.onDrop(e)} id={item}>
                <IssueStatusColumn status={item} DragCard={this.onDragCard} />
            </div>
        )
    }
    handleFilter = (field: any, option) => {
        switch (field) {
            case 'Dute date':
                if (this.state.issues) {
                    // console.log(this.state.issues.issues[0].issues[0].fields.duedate);
                }
            default:
                break;
        }
    }

    public render() {
        return (
            <div className="table">
                {this.mainRender()}
            </div>
        )
    }
}
function mapStateToProps(store: any) {
    if (store.filterOption) {
        return {
            filter: store.filterOption.filter
        };
    } else {
        return { filter: '' }
    }
}
export default connect(
    mapStateToProps,
    null
)(T);