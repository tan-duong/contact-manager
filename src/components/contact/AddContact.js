import React, { Component } from "react";


export default class AddContact extends Component {
    state = {
        name: '',
        phone: '',
        email: '',
    }

    render() {
        const { name, phone, email } = this.state
        return (
            <div className="card mb-3">
                <div className="card-header">
                    Add Contact
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter name ..."
                                value={name}
                                className="form-control form-control-lg"    
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Enter email ..."
                                value={email}
                                className="form-control form-control-lg"    
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Enter phone ..."
                                value={phone}
                                className="form-control form-control-lg"    
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
        )
    }
}

