import * as React from "react";


import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";


interface TableProperties extends ComponentBaseProperties {

}
interface TableState extends ComponentBaseState {

}

export class Table extends ComponentBase<TableProperties, TableState>{
    state = {

    }
    public render() {
        return (
            <div className="table">
            <div className="droppable-container"></div>
            <div className="droppable-container"></div>
            <div className="droppable-container"></div>
            <div className="droppable-container"></div>
            </div>
        )
    }

}