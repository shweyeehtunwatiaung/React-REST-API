import React from 'react'
import { Link } from 'react-router-dom'
import user from '../images/logo192.png'
const ContactCard = (props) => {

  const { id, name, email } = props.contact

  return (
    <div className="card mb-3">

      <div className="card-body card-decoration" >
        <div className="card-decoration" >
          {/* <img className="users" src={user} alt="User" /> */}
          <div>
            <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}>
              <h5 className="text-header">{name}</h5>
            </Link>
            <p className="card-text"> {email} </p>
          </div>
        </div>

        <div>
          <Link to={{ pathname: `/edit/`, state: { contact: props.contact } }}>
            <i class="fa fa-pencil-square-o" aria-hidden="true"
              style={{ color: "blue", paddingTop: "5px", paddingLeft: "5px" }}></i>
          </Link>
          <ion-icon name="trash-outline"
            style={{ color: "red", paddingTop: "5px", paddingLeft: "5px" }}
            onClick={() => props.clickHandler(id)}>
          </ion-icon>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
