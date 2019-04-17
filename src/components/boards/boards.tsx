import * as React from "react";

const { ipcRenderer } = require('electron')
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";


interface Boardsroperties extends ComponentBaseProperties {

}
interface BoardsState extends ComponentBaseState {
    boards?: Array
}

export class Boards extends ComponentBase<BoardsProperties, BoardsState>{
    state = {
        boards: []
    }
    boardsList = () => {
        if (this.state.boards.length > 0) {
            return this.state.boards.map(i =>
                <li className="list-board" key={i.id}>{i.name}</li>
            )
        }
    }

    public render() {
        ipcRenderer.on('boards', (event: any, boards: any) => {
            this.setState({ boards: boards.values })
        })
        const boardsHTML = this.boardsList();

        return (
            <ul>
                {boardsHTML}
            </ul>
        )
    }

}