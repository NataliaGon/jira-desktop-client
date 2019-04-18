import * as React from "react";


import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";
import { Draggable } from '../draggable-box/draggable-box';


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
            <div className="droppable-container">
            <Draggable/>
            </div>
            <div className="droppable-container"></div>
            <div className="droppable-container"></div>
            <div className="droppable-container"></div>
            </div>
        )
    }

}