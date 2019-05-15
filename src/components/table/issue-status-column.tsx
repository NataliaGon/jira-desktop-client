import * as React from 'react';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from '../../base-classes';
import Draggable from '../issue/issue';
import { connect } from 'react-redux';
const { ipcRenderer } = require('electron');

interface IssueStatusColumnProperties extends ComponentBaseProperties {

}
interface IssueStatusColumnState extends ComponentBaseState {
    issues?: Array
}

class IssueStatusColumn extends ComponentBase<IssueStatusColumnProperties, IssueStatusColumnState>{
    state = {
        
    }
    componentDidMount() {
        ipcRenderer.on('issues', (event: any, data: any, boardId: number, boardName:string) => {
            this.setState({
                issues: data,
                boardId: boardId,
                boardName: boardName
            })
        });

    }
    handleScroll = (e?:any) => {
        if (
            e.target.scrollHeight  - e.target.scrollTop
            === e.target.clientHeight
          ) {
            ipcRenderer.send('getIssues', this.state.boardId, this.state.boardName, 51);
            ipcRenderer.on('issues', (event: any, data: any, boardId: number) => {
                console.log(data, this.props.status);
                this.setState({
                    issues: data,
                    boardId: boardId
                })
            });
            console.log(
                'yep'
            );
          }else{
              'no'
          }
    }
    getIssues = () => {
        // this.handleFilter(this.props.filter)
        if (this.state.issues) {
            const issues = this.state.issues.issues[0].issues.filter(item => item.fields.status.name == this.props.status);
            return issues.map((i?: any) => {
                return <Draggable DragCard={this.onDragCard} key={i.id} issue={i} DragCard={this.props.DragCard}></Draggable >
            }
            )
        }
    }
    public render() {
        const style={
            height:'100%'
        }
        return (
            <div style={style}>
                <h3>{this.props.status}</h3>
                <div className="container-issues" onScroll={this.handleScroll}>
                    {this.getIssues()}
                </div>
            </div>
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
)(IssueStatusColumn);