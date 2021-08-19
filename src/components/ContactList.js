import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import ContactCard from './ContactCard'

const ContactList = (props) => {
  const history = useHistory()

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
          {contactsList}
            {/* <div onClick={hdandleGoTo}>OnClick</div> */}
          <Link to="/add">
            <button className="btn btn-info">Add Contact</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactList
