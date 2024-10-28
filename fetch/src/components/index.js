import React, { useEffect } from 'react'

function Fetch() {
    const [users, setUsers] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch((error) => {
            console.error('Error:', error);
        }
        )
        .finally(() => {
            setLoading(false)
        }
        )
    } , [])

  return (
    <div>
        {loading && <p>Loading...</p>}
      {
        users.map(user => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Fetch;
