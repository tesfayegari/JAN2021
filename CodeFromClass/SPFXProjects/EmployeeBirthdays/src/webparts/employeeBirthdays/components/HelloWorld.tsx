import * as React from 'react';

export interface IHelloWorldProps {
  name: string;
}

//Class React Component
export default class HelloWorld extends React.Component<IHelloWorldProps, any> {
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <div style={{ fontSize: '25px', fontWeight: 'bold' }}>
        Hello {this.props.name}
        <Hi></Hi>
      </div>
    );
  }
}

//Functional React Component 
export const Hi = (props: any) => {
  let name1 = 'Something else'
  return <div>Testing 123 {name1}</div>;
}