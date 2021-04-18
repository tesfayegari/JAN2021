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
import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';

export interface IMtMultiViewWebPartProps {
  description: string;
  fullName: string;
  test: string;
  test1: boolean;
  test2: string;
  test3: boolean;
  sliderproperty: number;
  lists: string;// | string[]; // Stores the list ID(s)
}

export default class MtMultiViewWebPart extends BaseClientSideWebPart<IMtMultiViewWebPartProps> {

  public render(): void {
    let apiUrl: string;
    if (this.properties.lists) {
      apiUrl = `${this.context.pageContext.web.absoluteUrl}/_api/web/lists(guid'${this.properties.lists}')/items?$top=10`
    }
    let itemsHtml: string = '';

    if (apiUrl) {
      this.readItems(apiUrl)
        .then((response: { value: any[] }): void => {
          console.log(`Successfully loaded ${response.value.length} items`, response.value);
          
          for (let item of response.value) {
            let titleLink = `<a href="/sites/demo5/Lists/SampleExpense/DispForm.aspx?ID=${item.ID}" target="_blank">${item.Title}</a>`;
            itemsHtml += `<li> ${titleLink}</li>`;
          }
          this.domElement.innerHTML = `
            <h1>The top 10 items in the selected list are:</h1>
            <ul id="items">${itemsHtml}</ul>            
            `;
        }, (error: any): void => {
          console.log('Loading all items failed with error: ' + error);
        });
    } else {
      this.domElement.innerHTML = `                       
            <h3>Please Select List First</h3>
            `;
    }


  }

  private readItems(url) {
    return this.context.spHttpClient.get(url,
      SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse): Promise<{ value: any[] }> => {
        return response.json();
      });
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
            description: 'Webpart Property Header'
          },
          groups: [
            {
              groupName: 'General Setting',
              groupFields: [
                PropertyPaneTextField('description', {
                  label: 'Webpart Description'
                }),
                PropertyFieldListPicker('lists', {
                  label: 'Select a list',
                  selectedList: this.properties.lists,
                  includeHidden: false,
                  orderBy: PropertyFieldListPickerOrderBy.Title,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  context: this.context as any,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'listPickerFieldId'
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
                  ]
                }),
                PropertyPaneToggle('test3', {
                  label: 'Toggle',
                  onText: 'On',
                  offText: 'Off'
                }),
                PropertyPaneSlider('sliderproperty', {
                  label: "Max Items",
                  min: 5,
                  max: 20,
                  value: 5,
                  showValue: true,
                  step: 1
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
