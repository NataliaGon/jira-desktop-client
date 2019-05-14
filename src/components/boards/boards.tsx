import * as React from "react";
const { ipcRenderer } = require('electron');
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";
import {Board} from '../../data/board';

interface BoardsProperties extends ComponentBaseProperties {
    
}
interface BoardsState extends ComponentBaseState {
    boards: Board
}

export class Boards extends ComponentBase<BoardsProperties, BoardsState>{
    state = {
        boards:{}
    }

    componentDidMount(){
        ipcRenderer.on('boards', (event: any, boards?: Board) => {
            this.setState({ boards: boards.values })
        })
    }
    
    getIssues(boardId:number, boardName:string){
        ipcRenderer.send('getIssues', boardId, boardName, 1)
    }

    boardsList = () => {
        if (this.state.boards.length > 0) {
            return this.state.boards.map(i =>
                <li className="list-board" key={i.id} onClick={()=>this.getIssues(i.id, i.name)}>{i.name}</li>
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