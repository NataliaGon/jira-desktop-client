import * as React from 'react';

import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from '../../base-classes';
import { TiDelete } from 'react-icons/ti';


interface SearchPopUpProperties extends ComponentBaseProperties {

}
interface SearchPopUpState extends ComponentBaseState {
    issues?: Array
}

export default class SearchPopUp extends ComponentBase<SearchPopUpProperties, SearchPopUpState>{
    state = {
        
    }

public render() {

    return (
        <div className="container-search-pop-up">
            search

          <div className="icon-close"><TiDelete onClick={() => this.openPin()} /></div> 
        </div>
    )
}
}