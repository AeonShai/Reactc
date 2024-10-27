import React, { useEffect, useState } from 'react'

const InitialFormValues = { fullname: '', number: '' }
function Form({ addContacts, contacts }) {
    const [form, setForm] = useState(InitialFormValues)
    useEffect(() => {
        setForm(InitialFormValues)
    }, [contacts])
    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (form.fullname === '' || form.number === '') {
            return false
        }

        addContacts([...contacts, form])
        
        
    }
  return (
    <form onSubmit={onSubmit}>
        <div>
            <input 
            name="fullname" 
            placeholder='Fullname'
            value={form.fullname}
            onChange={onChangeInput}
            />
        </div>
        <div>
            <input 
            name="number" 
            placeholder='Number'
            value={form.number}
            onChange={onChangeInput}
             />
        </div>
        <br />
        <div>
        <button>Add Contact</button>
        </div>
    </form>
  )
}

export default Form
