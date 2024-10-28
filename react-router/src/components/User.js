//write User.js
import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const User = () => {
    const [users, setUsers] = React.useState([])
    const { id } = useParams()
    useEffect (() => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
        .then(res => {
            setUsers(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    } , [])
    return (
        <div>
        <h1>User {id}</h1>
        <pre>{JSON.stringify(users, null, 2)}</pre>
        <Link to="/users">Back</Link>
        </div>
    )
}
export default User