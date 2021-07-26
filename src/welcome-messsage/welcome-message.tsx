import React from 'react';


import {DeveloperMessage}
  from '../components/developer-message/developer-message';

interface IProp {}

interface IState {
  name: string;
}

/**
 * Welcome message component displayed on home page
 */
export class WelcomeMessage extends React.Component<IProp, IState> {
  private readonly names: string[];

  private timeout: NodeJS.Timeout | null;

  /**
   * Construct and initialize properties
   * @param {IProp} props component properties
   */
  constructor(props: IProp) {
    super(props);
    this.names = [
      'Shibuya Rin',
      'Shimamura Uzuki',
      'Honda Mio',
      'Kanzaki Ranko',
    ];

    this.timeout = null;
    this.state = {name: this.names[
        Math.floor(Math.random() * this.names.length)]};
  }

  /**
   * Executes when compoment is mounted
   * Initialize component requirement
   */
  componentDidMount() {
    this.pickRandomName();
  }

  /**
   * Executes when component will unmount
   * Do clean up here
   */
  componentWillUnmount() {
    if (this.timeout !== null) {
      // Clear timeout on unmount if exist
      clearTimeout(this.timeout);
    }
  }

  /**
   * Render this component
   * @return {JSX.Element} welcome message
   */
  render(): JSX.Element {
    return (
      <div>
        <p>Welcome to React TypeScript training.</p>
        <DeveloperMessage name={this.state.name} />
      </div>
    );
  }

  /**
   * Pick random name from list and update state
   */
  private pickRandomName() {
    // Check if previous timeout exist
    if (this.timeout !== null) {
      clearTimeout(this.timeout);
    }

    const newName = this.names[Math.floor(Math.random() * this.names.length)];
    this.setState({name: newName});

    // Call self after 2 seconds
    this.timeout = setTimeout(() => this.pickRandomName(), 2000);
  }
}
