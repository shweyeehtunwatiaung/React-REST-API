import React from 'react'
import user from '../images/logo192.png'

const ContactDetail = (props) => {
  // console.log(props)
  const { name, email } = props.location.state.contact
  
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mb-3">
            <div className="card-body">
              <div className="card-title" style={{ display: "flex" }} >
                <img className="users" src={user} alt="User" />
                <h5>{name}</h5>
              </div>
              <p className="card-text"> {email} </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ContactDetail
