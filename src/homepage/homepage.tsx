import React from 'react';
import {Location} from 'history';

import logo from '../logo.svg';
import {WelcomeMessage} from '../welcome-messsage/welcome-message';

interface IProp {
  location: Location;
}

/**
 * Render Homepage element
 * @param {IProp} props component properties
 * @return {JSX.Element} homepage element
 */
export default function Homepage(props: IProp) {
  console.log(props.location.pathname);
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Hello, React TypeScript!
      </p>
      <WelcomeMessage />
      <p>
        Located at <code>{props.location.pathname}</code>
      </p>
    </div>
  );
}
