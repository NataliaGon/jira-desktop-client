import * as React from 'react';

import { Boards } from './components/boards/boards';
import { User } from './components/user/user';
import { Table } from './components/table/table';
import { FormAutor } from './components/authorization/authorization';

// import { TableR } from './components/table/table-react-dnd';


export class App extends React.Component<undefined, undefined> {



  render() {
    return (
      <div>
        <h1>Jira userfriendly system</h1>
        <div className="flex">
          <FormAutor />
          <User />
        </div>
        <Boards />
        <Table />

      </div>
    );
  }
}
