import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../Context";

export default class Contacts extends Component {
  _onDelete = id => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => {
      return contact.id !== id;
    });

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {contacts.map(contact => {
                return (
                  <Contact
                    key={contact.id}
                    contact={contact}
                    deleteHandler={this._onDelete.bind(this, contact.id)}
                  />
                );
              })}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
