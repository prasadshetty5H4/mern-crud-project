import React, { useState, useEffect } from 'react'
import axios from 'axios'
const UserList = () => {
const [users, setUsers] = useState([])
useEffect(() => {
axios.get('http://localhost:5000/api/users').then(response => setUsers(response.data)).catch(err => console.log(err))
}, [])
const handleDelete = async id => {
try {
await axios.delete(`http://localhost:5000/api/users/${id}`)
setUsers(users.filter(user => user.id !== id))
} catch (err) {
alert('Error deleting user')
}
}
return (
<div>
<h2>User List</h2>
<ul>
{users.map(user => (
<li key={user.id}>
{user.username}-{user.email}-{user.mobile_number}-{user.gender}
<img src={`http://localhost:5000/${user.photo}`} alt={user.username}/>
<button onClick={() => handleDelete(user.id)}>Delete</button>
</li>
))}
</ul>
</div>
)
}
export default UserList
