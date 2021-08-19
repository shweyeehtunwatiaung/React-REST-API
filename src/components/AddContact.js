import React, { Component } from 'react'

class AddContact extends Component {
  state = {
    name: '',
    email: ''
  }

  add = (e) => {
    e.preventDefault();
    if (this.state.name === '' && this.state.email === '') {
      alert('Please Fill the Form')
      return
    }

    this.props.addContact(this.state)
    this.setState({ name: '', email: '' })

    /* Programmatic navigation with history  */ 
    this.props.history.push('/')
  }
  render() {
    return (
      <div className="container ">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center my-3">Add Contact</h2>
            <form className="ui form" onSubmit={this.add}>
              <div className="form-group">
                <label>Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </div>
              <div className="field">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
              <button className="btn btn-info my-3">Add</button>
            </form>

          </div>
        </div>
      </div>
    )
  }
}
export default AddContact