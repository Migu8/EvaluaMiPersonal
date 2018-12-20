require('dotenv').config();

const mongoose = require('mongoose')
const User = require('../models/User')
// const Survey = require('../models/Survey')
mongoose.connect(process.env.DB)

//Para dar de alta a mi administrador
const admins=[
  {
    name: 'Joshelo',
    email: 'jpedraza@mail.com',
    role: 'Admin'
  }
]

// const surveys=[
//   {
//     year: 2018,
//     question1: '',
//     question2: '',
//     question3: '',
//     question4: '',
//     question5: ''
//   }
// ]

User.create(admins)
.then(admin=>{
  console.log(`${admin.length} adminitrators added`)
  mongoose.connection.close()
})
.catch(e=>{
  console.log('Something went wrong' + e)
})

// Survey.create(surveys)
// .then(survey=>{
//   console.log(`${survey.length} surveys added`)
//   mongoose.connection.close()
// })
// .catch(e=>{
//   console.log('Something went wrong' + e)
// })