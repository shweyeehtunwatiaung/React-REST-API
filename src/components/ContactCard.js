import React from 'react'
import { Link } from 'react-router-dom'
import user from '../images/logo192.png'
const ContactCard = (props) => {

  const { id, name, email } = props.contact

  return (
    <div className="container">
      <div className="card mb-3">

        <div className="card-body">
          <div className="card-title" style={{ display: "flex" }} >
            <img className="users" src={user} alt="User" />
            <h5>{name}</h5>

            <Link to={{ pathname: `/edit/`, state: { contact: props.contact } }}>
              <i class="fa fa-pencil-square-o" aria-hidden="true"
                style={{ color: "blue", paddingTop: "5px", paddingLeft: "5px" }}></i>
            </Link>

            <ion-icon name="trash-outline"
              style={{ color: "red", paddingTop: "5px", paddingLeft: "5px" }}
              onClick={() => props.clickHandler(id)}>
            </ion-icon>
          </div>

          <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}>
            <p className="card-text"> {email} </p>
            <i class="fa fa-trash" aria-hidden="true"></i>
          </Link>
        </div>


      </div>
    </div>
  )
}

export default ContactCard
