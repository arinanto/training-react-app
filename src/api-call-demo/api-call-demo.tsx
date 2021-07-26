import React from 'react';

// Models
interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

// Properties and states
interface IProp {
  location: Location;
}

interface IState {
  comments:IComment[]
}

/**
 * Developer message component displayed on welcome message
 */
export class ApiCallDemo extends React.Component<IProp, IState> {
  // eslint-disable-next-line require-jsdoc
  constructor(props: IProp) {
    super(props);
    this.state = {comments: []};
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
    return (
      <div>
        <ul>
          {this.state.comments.map((value, index) => (
            <li key={index}>
              <h2>{value.name}</h2>
              <h3>{value.email}</h3>
              <p>{value.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // eslint-disable-next-line require-jsdoc
  private callBackend() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json())
        .then((json) => this.setState({comments: json}));
  }
}
