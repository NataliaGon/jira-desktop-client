import * as React from "react";

const { ipcRenderer } = require('electron')
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";
import from 'boards.css'

interface Boardsroperties extends ComponentBaseProperties {

}
interface BoardsState extends ComponentBaseState {
    boards?: Array
}

export class Boards extends ComponentBase<BoardsProperties, BoardsState>{
    state = {
        boards: Array
    }

    boardsList = (boards?: any) => {
        console.log(boards);
        let html: any;
        for (let i in boards) {
            html+= '<li>' + boards[i].name +'</li>'
        }
        console.log(html);
        return html
    }

    public render() {
        ipcRenderer.on('boards', (event: any, boards: any) => {
            this.setState({ boards: boards.values })
        })
        const boardsHTML = this.boardsList(this.state.boards);

        return (
            <ul>
                {boardsHTML}
            </ul>
        )
    }

}