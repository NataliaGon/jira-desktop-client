import * as React from 'react';

import { Boards } from './components/boards/boards';
import { User } from './components/user/user';
import { FormAutor } from './components/authorization/authorization';
import Table  from './components/table/table';
import T from './components/table/t';
import PinContainer from './components/pin-container/pin-container';
import { Search } from './components/search/search';
import Filters from './components/filter/filter';

export class App extends React.Component<undefined, undefined> {



  render() {
    return (
      <div>
        <header>
          <h1>Jira userfriendly system</h1>
          <div className="flex">
            <FormAutor />
            <Search />
            <User />
          </div>
        </header>
        <main>
          <Boards />
          <Filters/>
          {/* <Table /> */}
          <T/>
          <PinContainer />
        </main>
      </div>
    );
  }
}
