import React, { Component } from "react";


export default class AddContact extends Component {
    state = {
        name: '',
        phone: '',
        email: '',
    }

    _onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    })

    _onSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        const { name, phone, email } = this.state
        return (
            <div className="card mb-3">
                <div className="card-header">
                    Add Contact
                </div>
                <div className="card-body">
                    <form onSubmit={this._onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter name ..."
                                value={name}
                                className="form-control form-control-lg"    
                                onChange={this._onChange}
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
                                onChange={this._onChange}
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
                                onChange={this._onChange} 
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

