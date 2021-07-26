import React from 'react';

interface IProp {
  location: Location;
}

interface IState {}

/**
 * Developer message component displayed on welcome message
 */
export class RouteOne extends React.Component<IProp, IState> {
  /**
   * Render this component
   * @return {JSX.Element} developer message
   */
  render(): JSX.Element {
    return (
      <div>
        <h1>This is Route One</h1>
        <h2>Located at <code>{this.props.location.pathname}</code></h2>
      </div>
    );
  }
}
