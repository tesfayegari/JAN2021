import * as React from 'react';
import { IPersonaSharedProps, Persona, PersonaSize, PersonaPresence } from '@fluentui/react/lib/Persona';

import styles from './EmployeeBirthdays.module.scss';
import { IEmployeeBirthdaysProps, IEmployeeBirthdaysState } from './IEmployeeBirthdaysProps';
import SPService from '../services/SPService';

export default class EmployeeBirthdays extends React.Component<IEmployeeBirthdaysProps, IEmployeeBirthdaysState> {

  private _spservice: SPService;
  constructor(props: IEmployeeBirthdaysProps) {
    super(props);
    this._spservice = new SPService(this.props.context);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this._spservice.getBirthdayItems().then(res => {
      console.log('Items from SharePoint is ', res.value);
      let spItems = [];

      for (let item of res.value) {
        let bDay = new Date(item.BirthDate);
        let today = new Date();
        if (bDay.getMonth() == today.getMonth())
          spItems.push(item);
      }
      this.setState({ items: spItems });
    });

    // const examplePersona1: IPersonaSharedProps = {
    //   imageUrl: 'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png',
    //   imageInitials: 'AL',
    //   text: 'Annie Lindqvist',
    //   secondaryText: 'Software Engineer',
    //   tertiaryText: 'Department: IT',
    //   optionalText: 'April 20th',
    //   imageAlt: "Annie Lindqvist, status is blocked"
    // };
    // const examplePersona: IPersonaSharedProps = {
    //   imageUrl: 'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png',
    //   imageInitials: 'AL',
    //   text: 'Tesfaye Gari',
    //   secondaryText: 'Software Engineer',
    //   tertiaryText: 'Department: IT',
    //   optionalText: 'April 20th',
    //   imageAlt: "Annie Lindqvist, status is blocked"
    // };

    // let emps = [];
    // emps.push(examplePersona);
    // emps.push(examplePersona1);

    // this.setState({ items: emps });

  }

  public render(): React.ReactElement<IEmployeeBirthdaysProps> {
    console.log('The state of the component is ', this.state);
    let persons: IPersonaSharedProps[] = this.state.items.map(p => {

      let photo: string = `/_layouts/15/userphoto.aspx?size=L&username=${p.Employee.EMail}`;
      let f = Intl.DateTimeFormat('en-us', { month: 'long', day: 'numeric' });

      return {
        imageUrl: photo,
        imageAlt: p.Employee.Title + ' Photo',
        text: p.Employee.Title,
        secondaryText: p.Employee.JobTitle,
        tertiaryText: f.format(new Date(p.BirthDate)),
        optionalText: 'Department: ' + p.Employee.Department
      }


    });

    return (
      <div className={styles.employeeBirthdays}>
        <h1>This Month Employee Birthdays</h1>

        {persons.map(e => {
          return <>
            <Persona
              {...e}
              size={PersonaSize.size100}
              presence={PersonaPresence.online}
              hidePersonaDetails={false}
            />
            <hr />
          </>
        })}


      </div>
    );
  }
}
