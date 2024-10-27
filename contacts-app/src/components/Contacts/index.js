import React, { useEffect, useState } from 'react'
import List from './List'
import Form from './Form'
import './styles.css'

function Contact() {
  const [contacts, setContacts] = useState([{
    fullname: 'John Doe',
    number: '123456',
   }, {
    fullname: 'Jane Doe',
    number : '123456',
  }
  ]);

  useEffect(() => {
    console.log(contacts)
  }, [contacts]);
  return (
    <div id="container">
      <List contacts={contacts} />
      <Form addContacts={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contact
