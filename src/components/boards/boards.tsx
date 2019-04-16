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
        boards: Array
    }

    boardsList = (boards?: any) => {
        // return boards.map((each?:any) => {
        //     <li>{each.name}</li>
        // });
        console.log(boards);
        let html: any;
        for (let i in boards){
            console.log(i);
            console.log(boards[i]);
                 html +=boards[i].name
        }
        // else{
        //     let html: any;
        //     console.log(boards)
        //     for (let i: any = 0; i < boards.length; i++) {
        //         console.log(boards[i])
        //         html += `<li class="board">${i}</li>`
        //     }
           return html
        // }
    }

    public render() {
        ipcRenderer.on('boards', (event: any, boards: any) => {
            this.setState({ boards: boards.values })
        })


        return (
            <div>
                {this.boardsList(this.state.boards)}
            </div>
        )
    }

}