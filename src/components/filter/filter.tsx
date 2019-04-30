import * as React from "react";
import { connect } from 'react-redux';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";
import {filter} from './filter.actions'



interface FiltersProperties extends ComponentBaseProperties {

}
interface FiltersState extends ComponentBaseState {

}

 class Filters extends ComponentBase<FiltersProperties, FiltersState>{
    state = {
        open: false
    }
    componentDidMount() {

    }
  
    handleOpen = () => {
        this.setState({ open: !this.state.open })
    }
    filterRender = () => {
        if (!this.state.open) {
            return <button className='filter-btn' onClick={() => this.handleOpen()}>filter</button>
        } else {
            return (
                <div className="filter-container">
                    <button className='filter-btn' onClick={() => this.handleOpen()}>cansel</button>
                    <ul className="filter-options">
                        <li className="filter-opions-list" onClick={() => this.props.filter('Priority')}>Priority</li>
                        <li className="filter-opions-list" onClick={() => this.props.filter('Dute date')}>Dute date</li>
                        <li className="filter-opions-list" onClick={() => this.props.filter('Created')}>Created</li>
                    </ul>
                </div>
            )
        }
    }
    public render() {

        return (
            <div className="filters-component">
                {this.filterRender()}
            </div>
        )
    }
}

export default connect(
     null,
    {filter}
  )(Filters);