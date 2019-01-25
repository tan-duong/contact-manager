import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    deleteHandler: PropTypes.func.isRequired,
  };

  state = {
    showContactInfo: false
  };

  _onClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  _onDelete = () => {
      this.props.deleteHandler()
  }

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            onClick={this._onClick}
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <i className="fas fa-times" 
            style={{cursor: 'pointer', float: 'right', color: 'red'}}
            onClick={this._onDelete}
          />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}
