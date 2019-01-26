import React, { Component } from "react";

const Context = React.createContext();



const reducer = (state, action) => {
  switch(action.type){
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => {
          return contact.id !== action.payload.id
        })
      }
    default:
      return state
  }
}

export class Provider extends Component {
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
    ],
    dispatch: action => this.setState(state => {
      return reducer(state, action)
    }) 
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer
