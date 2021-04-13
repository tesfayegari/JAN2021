import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'MtMultiViewWebPartStrings';

export interface IMtMultiViewWebPartProps {
  description: string;
}

export default class MtMultiViewWebPart extends BaseClientSideWebPart<IMtMultiViewWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <h1>This is so beautiful WebPart</h1>
      <h3>Title of Webpart is : ${this.properties.description}</h3>
      `;
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
