const mysql = require('mysql')
const db = mysql.createConnection({ host: 'localhost', user: 'root', password: '', database: 'userdb' })
db.connect(err => { if (err) throw err })
const getUsers = (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(results)
    }
  })
}
const createUser = (req, res) => {
  const { username, email, mobile_number, gender } = req.body
  const photo = req.file ? req.file.path : null
  db.query('INSERT INTO users (username, email, mobile_number, gender, photo) VALUES (?, ?, ?, ?, ?)', 
    [username, email, mobile_number, gender, photo], 
    (err) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send({ message: 'User created' })
      }
  })
}
const updateUser = (req, res) => {
  const { id } = req.params
  const { username, email, mobile_number, gender } = req.body
  const photo = req.file ? req.file.path : null
  db.query('UPDATE users SET username=?, email=?, mobile_number=?, gender=?, photo=? WHERE id=?', 
    [username, email, mobile_number, gender, photo, id], 
    (err) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send({ message: 'User updated' })
      }
  })
}
const deleteUser = (req, res) => {
  const { id } = req.params
  db.query('DELETE FROM users WHERE id=?', [id], (err) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send({ message: 'User deleted' })
    }
  })
}
module.exports = { getUsers, createUser, updateUser, deleteUser }
