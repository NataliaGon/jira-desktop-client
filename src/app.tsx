import * as React from 'react';

import { Boards } from './components/boards/boards';
import { User } from './components/user/user';
import { FormAutor } from './components/authorization/authorization';
import { TableD } from './components/table/table-test-data';
import PinContainer from './components/pin-container/pin-container';

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
        <TableD/>
        <PinContainer/> 
      </div>
    );
  }
}
