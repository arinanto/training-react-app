import React from 'react';

interface IProp {
  headers: string[];
  rows: string[][];
}

interface IState {}

/**
 * Developer message component displayed on welcome message
 */
export class MyTable extends React.Component<IProp, IState> {
  /**
   * Render this component
   * @return {JSX.Element} developer message
   */
  render(): JSX.Element {
    const columnCount: number = this.props.headers.length;

    return (
      <table>
        <thead>
          <tr>
            {this.props.headers.map((value, index) => (
              <th key={index}>{value}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {this.props.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {this.props.rows[rowIndex].map((column, colIndex) => {
                if (colIndex >= columnCount ) {
                  // throw error here
                }

                return <td key={colIndex}>{column}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
