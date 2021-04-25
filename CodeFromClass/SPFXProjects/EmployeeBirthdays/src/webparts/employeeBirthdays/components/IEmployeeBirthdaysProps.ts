import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IEmployeeBirthdaysProps {
  description: string;
  context: WebPartContext;
}

export interface IEmployeeBirthdaysState {
  items: any[];
}
