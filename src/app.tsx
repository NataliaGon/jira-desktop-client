import * as React from 'react';
import { Form } from './components/autoriz-form/form';
import { Boards } from './components/boards/boards';
import { User } from './components/user/user';

export class App extends React.Component<undefined, undefined> {


  render() {
    return (
      <div>
        <h1>Jira userfriendly system</h1>
        <div className="flex">
          <Form />
          <User />
        </div>
        <Boards />
      </div>
    );
  }
}
