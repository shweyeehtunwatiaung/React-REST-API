import React, { Component } from 'react'

class EditContact extends Component {
  constructor(props){
    super(props)
    // Access route state
    const {id,name,email} = props.location.state.contact  

    this.state={
      id ,
      name,
      email
    }
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === '' && this.state.email === '') {
      alert('Please Fill the Form')
      return
    }

    this.props.updateContactHandler(this.state)
    this.setState({ name: '', email: '' })

    /* Programmatic navigation with history  */ 
    this.props.history.push('/')
  }
  render() {
    return (
      <div className="container ">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center my-3">Update Contact</h2>
            <form className="ui form" onSubmit={this.update}>
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
              <button className="btn btn-info my-3">Update</button>
            </form>

          </div>
        </div>
      </div>
    )
  }
}
export default EditContact