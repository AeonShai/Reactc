import React, { useState } from 'react'

function List({contacts}) {
  const [filterText, setFilterText] = useState('');

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });
  return (
    <div>
      <input 
      placeholder='Search Contact'
      value={filterText}
      onChange={(e) => setFilterText(e.target.value)}
      />
      <br />
        Contacts List
        <ul className='list'>
          {
            filtered.map((contact, index) => (
              <li key={index}>
                {contact.fullname} - {contact.number}
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default List
