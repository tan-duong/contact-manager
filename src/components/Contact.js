import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../Context";

export default class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired
  };

  state = {
    showContactInfo: false
  };

  _onClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  _onDelete = (id, dispatch) => {
    dispatch({
      type: 'DELETE_CONTACT',
      payload: {
        id: id
      }
    })
  }

  render() {
    
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { id, name, email, phone } = this.props.contact;
          const { dispatch } = value
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
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this._onDelete.bind(this, id, dispatch)}
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          )
        }}
      </Consumer>

    );
  }
}
