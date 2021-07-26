import React from 'react';

interface IProp {
    name: string;
}

interface IState {}

/**
 * Developer message component displayed on welcome message
 */
export class DeveloperMessage extends React.Component<IProp, IState> {
  /**
   * Render this component
   * @return {JSX.Element} developer message
   */
  render(): JSX.Element {
    return (
      <p>Hello {this.props.name}, thank you for visiting this website.</p>
    );
  }
}
