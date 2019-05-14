import * as React from "react";
import Draggable from '../issue/issue';
import { connect } from 'react-redux';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";
const { ipcRenderer } = require('electron');
// import InfiniteScroll from 'react-infinite-scroll-component';


interface TableProperties extends ComponentBaseProperties {

}
interface TableState extends ComponentBaseState {

}

class Table extends ComponentBase<TableProperties, TableState>{
    state = {
        status: ['In progress', 'Open', 'Closed', 'Stalled', 'Internal review', 'Client review']
    };
    
    handleScroll = (e?:any) => {
        console.log(e.target);
        if (
            e.target.scrollHeight  - e.target.scrollTop
            === e.target.clientHeight
          ) {
            ipcRenderer.send('getIssues', this.state.boardId, this.state.boardName, 51)
            console.log(
                'yep'
            );
          }else{
              'no'
          }
    }
    componentDidMount() {
        ipcRenderer.on('issues', (event: any, data: any, boardId) => {
            this.setState({ issues: data,
                boardId:boardId
             })
        });
        // window.addEventListener('scroll', this.handleScroll);
    }
  
    // componentWillUnmount() {
    //   window.removeEventListener('scroll', this.handleScroll);
    // }

    moveCard(data: any, newList: any) {
        for (let i in this.state.issues.issues[0].issues) {
            if (this.state.issues.issues[0].issues[i].id == data.cardId) {
                const state = this.state.issues;
                state.issues[0].issues[i].fields.status.name = newList;
                this.setState({ issues: state });
                // this.setState({ issues: update(this.state.issues.issues[0].issues, { [i]:{fields:{status:{name: { $set: newList }}}}})});
            }
        }

    }
    getIssue = (id: any) => {
        for (let i of this.state.allIssues) {
            if (i.id == id) {
                return i
            }
        }
    }
    onDragOver = (e: any) => {
        e.preventDefault();
    }
    onDrop = (e: any) => {
        const newList = e.currentTarget.id;
        e.preventDefault();
        const data = JSON.parse(e.dataTransfer.getData("text"));
        this.moveCard(data, newList);
    }
    onDragCard = (e: any) => {
        const data = {
            cardId: e.currentTarget.id,
            oldlistId: e.currentTarget.parentElement.id
        }
        e.dataTransfer.setData('text', JSON.stringify(data));
    }
    getIssues = (status?: string) => {
        this.handleFilter(this.props.filter)
        if (this.state.issues) {
            const issues = this.state.issues.issues[0].issues.filter(item => item.fields.status.name == status);
            return issues.map((i?: any) => {
                return <Draggable DragCard={this.onDragCard} key={i.id} issue={i}></Draggable >
            }
            )
        }
    }
    mainRender = () => {
        return this.state.status.map((item?: any) =>
            <div className="droppable-container" key={item} onDragOver={(e: any) => this.onDragOver(e)} onDrop={(e: any) => this.onDrop(e)} id={item}>
                <h3>{item}</h3>
                <div className="container-issues"  onScroll={this.handleScroll}>
            
                    {this.getIssues(item)}
                 
                </div>
            </div>
        )

    }
    handleFilter = (field: any, option) => {
        switch (field) {
            case 'Dute date':
                if (this.state.issues) {
                    // console.log(this.state.issues.issues[0].issues[0].fields.duedate);
                }
            default:
                break;
        }
    }

    public render() {
        return (
            <div className="table">
                {this.mainRender()}
            </div>
            // <div>
                /* <InfiniteScroll
                pageStart={0}
                loadMore={}
                hasMore={}
                loader={}>

                <div className="tracks">
                   
                </div>
            </InfiniteScroll> */
            /* </div> */

        )
    }
}
function mapStateToProps(store: any) {
    if (store.filterOption) {
        return {
            filter: store.filterOption.filter
        };
    } else {
        return { filter: '' }
    }
}
export default connect(
    mapStateToProps,
    null
)(Table);