import * as React from "react";

const { ipcRenderer } = require('electron')
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";


interface BoardsProperties extends ComponentBaseProperties {

}
interface BoardsState extends ComponentBaseState {
    boards?: Array
}

export class Boards extends ComponentBase<BoardsProperties, BoardsState>{
    state = {
        boards: []
    }

    componentDidMount(){
        ipcRenderer.on('boards', (event: any, boards: any) => {
            this.setState({ boards: boards.values })
        })

    }

    boardsList = () => {
        if (this.state.boards.length > 0) {
            return this.state.boards.map(i =>
                <li className="list-board" key={i.id}>{i.name}</li>
            )
        }
    }

    public render() {

        const boardsHTML = this.boardsList();

        return (
            <ul className="container-boards" >
                <li className="list-board title">Boards</li>
                {boardsHTML}
            </ul>
        )
    }

}