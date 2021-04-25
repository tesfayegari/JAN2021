import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';

export default class SPService {
  constructor(private context: WebPartContext) {
  }

  public getBirthdayItems() {
    const siteUrl = this.context.pageContext.site.absoluteUrl;
    return this.context.spHttpClient.get(`${siteUrl}/_api/web/Lists/getbytitle('BDays')/items?$top=300&$select=*,Employee/Title,Employee/Name, Employee/EMail, Employee/MobilePhone, Employee/SipAddress, Employee/Department, Employee/JobTitle, Employee/FirstName, Employee/LastName, Employee/WorkPhone, Employee/UserName, Employee/Office, Employee/ID, Employee/Modified, Employee/Created&$expand=Employee`, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse): Promise<{ value: any[] }> => {
        return response.json();
      })
  }
  
  public getListItems(listName: string) {
    const siteUrl = this.context.pageContext.site.absoluteUrl;
    return this.context.spHttpClient.get(`${siteUrl}/_api/web/Lists/getbytitle('${listName}')/items`, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse): Promise<{ value: any[] }> => {
        return response.json();
      })
  }

}