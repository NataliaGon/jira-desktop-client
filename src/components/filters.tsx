import * as React from "react";
import { FaSearch } from 'react-icons/fa';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";
const { ipcRenderer } = require('electron');

interface FiltersProperties extends ComponentBaseProperties {

}
interface FiltersState extends ComponentBaseState {

}

export class Filters extends ComponentBase<FiltersProperties, FiltersState>{
    state = {
        input: ''
    }
    componentDidMount() {
        ipcRenderer.on('searchResults', (event: any, data: any) => {
            console.log(data);
        })
    }
    search = () => {
        ipcRenderer.send('search', this.state.input); 
    }
    onChange = (e: any) => {
        this.setState({ input: e.target.value })
    }
    handleKeyUp = (e?:any)=>{
        if (e.keyCode === 13) {
            this.search();
          }
    }
    public render() {
        return (
            <div className="search-container">
                <input type="text" onChange={(e: any) => this.onChange(e)} onKeyUp={(e: any)=>this.handleKeyUp(e)} />
                <FaSearch onClick={() => this.search()} />
            </div>
        )
    }
}
