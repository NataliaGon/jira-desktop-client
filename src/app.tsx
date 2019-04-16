import * as React from 'react';
import {Form} from './components/autoriz-form/form';
import {Boards} from './components/boards/boards';

export class App extends React.Component<undefined, undefined> {


  render() {
    return (
      <div>
        <h2>Jira userfriendly system</h2>
        <Form />
        <Boards />
      </div>
    );
  }
}
