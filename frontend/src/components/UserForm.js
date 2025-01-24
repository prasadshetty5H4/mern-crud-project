import React, { useState } from 'react'
import axios from 'axios'
const UserForm = () => {
const [username, setUsername] = useState('')
const [email, setEmail] = useState('')
const [mobileNumber, setMobileNumber] = useState('')
const [gender, setGender] = useState('')
const [photo, setPhoto] = useState(null)
const handleSubmit = async e => {
e.preventDefault()
const formData = new FormData()
formData.append('username', username)
formData.append('email', email)
formData.append('mobile_number', mobileNumber)
formData.append('gender', gender)
formData.append('photo', photo)
try {
await axios.post('http://localhost:5000/api/users', formData)
alert('User added successfully')
} catch (err) {
alert('Error adding user')
}
}
return (
<form onSubmit={handleSubmit}>
<input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username"/>
<input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
<input type="text" value={mobileNumber} onChange={e => setMobileNumber(e.target.value)} placeholder="Mobile Number"/>
<input type="text" value={gender} onChange={e => setGender(e.target.value)} placeholder="Gender"/>
<input type="file" onChange={e => setPhoto(e.target.files[0])}/>
<button type="submit">Add User</button>
</form>
)
}
export default UserForm
