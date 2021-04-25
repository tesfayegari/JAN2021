import * as React from 'react';
import { ISpFxReactExpenseProps } from './ISpFxReactExpenseProps';


export default class SpFxReactExpense extends React.Component<ISpFxReactExpenseProps, {}> {
  public render(): React.ReactElement<ISpFxReactExpenseProps> {
    return (
      <div className="container-fluid">
        <h1>This is My First React Component</h1>
        <p>Description is : {this.props.description}</p>
      </div>
    );
  }
}
