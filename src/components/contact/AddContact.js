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
    email: "",
    
      nameErr: '',
      emailErr: '',
      phoneErr: ''
    
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

    //Check errors
    if (name === "" || email === "" || phone === "") {
      this.setState({
        
          nameErr: name === "" ? "name is required" : '',
          emailErr: email === "" ? "email is required": '',
          phoneErr: phone === "" ? "phone is required" : '',
      });
      return;
    }


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
    const { name, email, nameErr, emailErr, phoneErr } = this.state;
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
                    error={nameErr}
                  />
                  <TextInputGroup
                    name="email"
                    placeholder="Enter email ..."
                    value={email}
                    onChange={this._onChange}
                    error={emailErr}
                  />
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter phone ..."
                      defaultValue={phone}
                      className={`${phoneErr !== '' ? 'is-invalid' : null} form-control form-control-lg`}
                      ref={this.phoneInput}
                    />
                    {phoneErr && 
                      <div className="invalid-feedback">{phoneErr}</div>
                    }
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
