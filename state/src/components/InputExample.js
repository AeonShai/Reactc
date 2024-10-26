import { useState } from "react";

function InputExample() {
    const [form, setForm] = useState({name:"",surname:""});
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    return (
        <div>
            <h1>Input Example</h1>
            <input name="name" value={form.name} onChange={handleChange} />
            <hr />
            <br />
            <input name="surname" value={form.surname} onChange={handleChange} />
            <br />
            <br />
            <h2>Name: {form.name}</h2>
            <h2>Surname: {form.surname}</h2>
        </div>
    )
 }

    
export default InputExample;