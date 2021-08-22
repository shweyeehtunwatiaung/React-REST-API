import React,{ useRef } from 'react'
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

  const inputEl = useRef("")

  const getSearchTerm = () =>{
    // console.log(inputEl.current.value)

    // Give value to App
    props.searchKeyword(inputEl.current.value)
  }

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-md-6 offset-md-3">

          <h2> Contact List</h2>

          <div className="contact-wrap">
            <input className="form-control" 
            type="text" 
            placeholder="Search" 
            ref = { inputEl }
            value = {props.term}
            onChange= {getSearchTerm}
            />
            <div className="icon">
              <MdSearch />
            </div>
          </div>

          {contactsList.length>0 ? contactsList : "No Contacts available"}

          <Link to="/add">
            
            <button className="btn btn-info">Add Contact</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactList
