import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SpFxExpenseReactWebPartStrings';
import SpFxExpenseReact from './components/SpFxExpenseReact';
import { ISpFxExpenseReactProps } from './components/ISpFxExpenseReactProps';

export interface ISpFxExpenseReactWebPartProps {
  description: string;
}

export default class SpFxExpenseReactWebPart extends BaseClientSideWebPart<ISpFxExpenseReactWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpFxExpenseReactProps> = React.createElement(
      SpFxExpenseReact,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
