import React from 'react';
import {Location} from 'history';

import {MyTable} from '../components/mytable/mytable';

interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface IProp {
  location: Location;
}

interface IState {
  users: IUser[];
}

/**
 * Developer message component displayed on welcome message
 */
export class Users extends React.Component<IProp, IState> {
  private readonly headers: string[];

  // eslint-disable-next-line require-jsdoc
  constructor(props: IProp) {
    super(props);
    this.state = {users: []};
    this.headers = ['ID', 'Name', 'Email', 'Phone'];
  }

  // eslint-disable-next-line require-jsdoc
  componentDidMount() {
    this.callBackend();
  }

  /**
   * Render this component
   * @return {JSX.Element} developer message
   */
  render(): JSX.Element {
    const usersAs2DString = this.convertTo2DArray(this.state.users);

    return (
      <div>
        <MyTable headers={this.headers} rows={usersAs2DString} />
      </div>
    );
  }

  // eslint-disable-next-line require-jsdoc
  private callBackend() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => this.setState({users: json}));
  }

  // eslint-disable-next-line require-jsdoc
  private convertTo2DArray(users: IUser[]): string[][] {
    const string2DArray: string[][] = new Array(users.length);

    users.map((user, index) => {
      string2DArray[index] = new Array(4);
      string2DArray[index][0] = user.id.toString();
      string2DArray[index][1] = user.name;
      string2DArray[index][2] = user.email;
      string2DArray[index][3] = user.phone;
    });

    return string2DArray;
  }
}
