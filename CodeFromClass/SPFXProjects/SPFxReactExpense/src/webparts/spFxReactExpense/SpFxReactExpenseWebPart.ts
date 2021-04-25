import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SpFxReactExpenseWebPartStrings';
import SpFxReactExpense from './components/SpFxReactExpense';
import { ISpFxReactExpenseProps } from './components/ISpFxReactExpenseProps';

export interface ISpFxReactExpenseWebPartProps {
  description: string;
}

export default class SpFxReactExpenseWebPart extends BaseClientSideWebPart<ISpFxReactExpenseWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpFxReactExpenseProps> = React.createElement(
      SpFxReactExpense,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get disableReactivePropertyChanges(): boolean {
    return true;
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
