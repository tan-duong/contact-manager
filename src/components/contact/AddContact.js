import React, { Component } from "react";
import { Consumer } from "../../Context";
import uuid from "uuid";
import TextInputGroup from "../layout/TextInputGroup";
export default class AddContact extends Component {
  constructor(props) {
    super(props);
    this.phoneInput = React.createRef();
  }

  state = {
    name: "",
    phone: "",
    email: ""
  };

  _onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  _onSubmit = (dispatch, e) => {
    e.preventDefault();

    this.setState({
      phone: this.phoneInput.current.value
    });

    let { name, phone, email } = this.state;

    phone = this.phoneInput.current.value;

    const contact = {
      id: uuid(),
      name,
      phone,
      email
    };

    dispatch({
      type: "ADD_CONTACT",
      payload: {
        contact: contact
      }
    });

    this.setState({
      name: "",
      phone: "",
      email: ""
    });

    this.phoneInput.current.value = "";
  };

  static defaultProps = {
    phone: "999-999-9999"
  };

  render() {
    const { name, email } = this.state;
    const { phone } = this.props;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this._onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    name="name"
                    placeholder="Enter name ..."
                    value={name}
                    onChange={this._onChange}
                  />
                  <TextInputGroup
                    name="email"
                    placeholder="Enter email ..."
                    value={email}
                    onChange={this._onChange}
                  />
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter phone ..."
                      defaultValue={phone}
                      className="form-control form-control-lg"
                      ref={this.phoneInput}
                    />
                  </div>

                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
