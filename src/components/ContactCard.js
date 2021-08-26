import React from 'react'
import { Link } from 'react-router-dom'
import user from '../images/logo192.png'
import { MdDelete, MdEdit } from 'react-icons/md'

const ContactCard = (props) => {

  const { id, name, email } = props.contact

  return (
    <div className="card mb-3">
      <div className="card-body card-decoration" >
        <div className="card-decoration" >
          <img className="users" src={user} alt="User" />
          <div className="contact-data">
            <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}>
              <h5 className="text-header">{name}</h5>
            </Link>
            <p className="card-text"> {email} </p>
          </div>
        </div>

        <div className="action">
          <Link to={{ pathname: `/edit/`, state: { contact: props.contact } }}>
            <MdEdit style={{ width: '24', height: '24', color: "blue", paddingTop: "5px", paddingLeft: "5px" }} />
          </Link>
          
          <MdDelete style={{ width: '24', height: '24', color: "red", paddingTop: "5px", paddingLeft: "5px" }}
            onClick={() => props.clickHandler(id)} />
        </div>
      </div>
    </div>
  )
}

export default ContactCard
