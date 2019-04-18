import * as React from "react";


import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";


interface DraggableProperties extends ComponentBaseProperties {

}
interface DraggableState extends ComponentBaseState {

}

export class Draggable extends ComponentBase<DraggableProperties, TDraggableState>{
    state = {

    }
    public render() {
        return (
            <div className="draggable-box">
            
            </div>
        )
    }

}