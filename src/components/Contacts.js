import React, { Component } from "react";
import Contact from "./Contact";

export default class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-777-9999"
      },
      {
        id: 2,
        name: "Karen Will",
        email: "jdoe@gmail.com",
        phone: "555-777-9999"
      },
      {
        id: 3,
        name: "Tom Jackson",
        email: "jdoe@gmail.com",
        phone: "555-777-9999"
      }
    ]
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => {
          return <Contact key={contact.id} contact={contact} />;
        })}
      </React.Fragment>
    );
  }
}
