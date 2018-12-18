require('dotenv').config();

const mongoose = require('mongoose')
const User = require('../models/User')
mongoose.connect('mongodb://admin:admin123@ds139675.mlab.com:39675/perritos')

//Para dar de alta a mi administrador
const admins=[
  {
    name: 'Joshelo',
    lastName: 'Pedraza',
    email: 'jpedraza@mail.com',
    profilePic: 'https://static.oficinaempleo.com/blog/wp-content/uploads/2015/08/recursos-humanos.jpg',
    role: 'Admin'
  }
]

User.create(admins)
.then(admin=>{
  console.log(`${admin.length} adminitrators added`)
  mongoose.connection.close()
})
.catch(e=>{
  console.log('Something went wrong' + e)
})