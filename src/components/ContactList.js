import React from 'react'
import { Link } from 'react-router-dom'
import ContactCard from './ContactCard'
import { MdSearch } from 'react-icons/md'

const ContactList = (props) => {

  const deleteContactHandler = (id) => {
    props.getContactId(id)
  }

  const contactsList = props.contacts.map(contact => {
    return (
      <ContactCard key={contact.id} contact={contact} clickHandler={deleteContactHandler} />
    )
  })

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-md-6 offset-md-3">

          <h2> Contact List</h2>

          <div className="contact-wrap">
            <input className="form-control" type="search" placeholder="Search" />
            <div className="icon">
              <MdSearch />
            </div>
          </div>

          {contactsList}

          <Link to="/add">
            
            <button className="btn btn-info">Add Contact</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactList
