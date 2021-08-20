import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import uuid from 'uuid/dist/v1';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import Header from './components/Header';
import ContactList from './components/ContactList';
import ContactDetail from './components/ContactDetail';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import api from './api/contacts'

function App() {
  const [contacts, setContacts] = useState([])

  // contacts state => 2,3

  //const LOCALSTORAGE_KEY = "ContactsList"

  //Retrieve Contacts Api

  const retrieveContacts = async () => {
    const response = await api.get("/contacts")
    return response.data
  }

  useEffect(() => {

    const getAllContacts = async () => {
      const allContacts = await retrieveContacts()
      if (allContacts) setContacts(allContacts)
    }
    getAllContacts()

  }, [])

  // Add new Contact Api

  const addContact = async (contact) => {
   
    const request = {
      id: uuid(),
      ...contact
    }
    const response = await api.post("/contacts", request)
    
    setContacts([...contacts, response.data])
  }

  const updateContactHandler = async (contact) => {
    
    const response = await api.put(`/contacts/${contact.id}`, contact )

    const { id } = response.data

    setContacts(
      contacts.map((contact)=>{
        return contact.id === id ? {...response.data } : contact
      })
    )
  }

  // Delete a Contact Api
  const deleteContact = async (id) => {    
    await api.delete(`/contacts/${id}`)

    const newContactsList = contacts.filter((contact) => { // return []
      return contact.id !== id
    })
    setContacts(newContactsList)
  }

  useEffect(() => {
    // localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact
            render={(props) => (<ContactList {...props} contacts={contacts} getContactId={deleteContact} />)} />

          <Route path="/add"
            render={(props) => (<AddContact {...props} addContact={addContact} />)} />

          <Route path="/edit"
            render={(props) => (<EditContact {...props} updateContactHandler={updateContactHandler} />)} />

          <Route path='/contact/:id' component={ContactDetail} />

          <Route path='/about' component={AboutUs} />
          <Route path='/contact' component={ContactUs} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;