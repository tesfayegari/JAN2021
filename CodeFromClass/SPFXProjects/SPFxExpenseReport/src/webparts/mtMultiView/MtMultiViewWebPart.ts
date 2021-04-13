import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneCheckbox,
  PropertyPaneDropdown,
  PropertyPaneSlider,
  PropertyPaneTextField,
  PropertyPaneToggle
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'MtMultiViewWebPartStrings';

export interface IMtMultiViewWebPartProps {
  description: string;
  fullName: string;
  test: string;
  test1: boolean;
  test2: string;
  test3: boolean;
  sliderproperty: number;
}

export default class MtMultiViewWebPart extends BaseClientSideWebPart<IMtMultiViewWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <h1>This is so beautiful WebPart</h1>
      <h3>Title of WebPart is : ${this.properties.description}</h3>
      <h3>Full name is : ${this.properties.fullName}</h3>
      <h3>Multilne of text is : ${this.properties.test}</h3>
      <h3>checkbox value is : ${this.properties.test1}</h3>
      <h3>Dropdown Value is : ${this.properties.test2}</h3>
      <h3>Toggle value is : ${this.properties.test3}</h3>
      <h3>Slide value is : ${this.properties.sliderproperty}</h3>
      `;
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
            description:'Webpart Property Header'
          },
          groups: [
            {
              groupName: 'General Setting',
              groupFields: [
                PropertyPaneTextField('description', {
                  label: 'Webpart Description'
                }),
                PropertyPaneTextField('fullName', {
                  label: 'Full Name'
                }),
                PropertyPaneTextField('test', {
                  label: 'Multi-line Text Field',
                  multiline: true
                }),
                PropertyPaneCheckbox('test1', {
                  text: 'Checkbox'
                }),
                PropertyPaneDropdown('test2', {
                  label: 'Dropdown',
                  options: [
                    { key: '1', text: 'One' },
                    { key: '2', text: 'Two' },
                    { key: '3', text: 'Three' },
                    { key: '4', text: 'Four' }
                  ]}),
                PropertyPaneToggle('test3', {
                  label: 'Toggle',
                  onText: 'On',
                  offText: 'Off'
                }),
                PropertyPaneSlider('sliderproperty',{  
                  label:"Max Items",  
                  min:5,  
                  max:20,  
                  value:5,  
                  showValue:true,  
                  step:1                
                })  
              ]
            }
          ]
        }
      ]
    };
  }
}
