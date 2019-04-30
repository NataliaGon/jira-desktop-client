import * as React from 'react';

import { Boards } from './components/boards/boards';
import { User } from './components/user/user';
import { FormAutor } from './components/authorization/authorization';
import { Table} from './components/table/table';
import PinContainer from './components/pin-container/pin-container';
import {Search} from './components/search/search'

export class App extends React.Component<undefined, undefined> {



  render() {
    return (
      <div>
        <h1>Jira userfriendly system</h1>
        <div className="flex">
          <FormAutor />
          <Search/>
          <User />
        </div>
        <Boards />
        <Table/>
        <PinContainer/> 
      </div>
    );
  }
}
