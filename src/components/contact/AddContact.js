import React, { Component } from "react";


export default class AddContact extends Component {
    constructor(props){
        super(props)
        this.phoneInput = React.createRef()
    }

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

        this.setState({
            phone: this.phoneInput.current.value
        })

        console.log(this.state)
    }

    static defaultProps = {
        phone: '999-999-9999'
    }

    render() {
        const { name, email } = this.state
        const { phone } = this.props
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
        )
    }
}

