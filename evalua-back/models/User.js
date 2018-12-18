const mongoose = require('mongoose')
const Schema = mongoose.Schema
const plm = require('passport-local-mongoose')

const userSchema = new Schema({
  name: String,
  lastName: String,
  email: {
    type:String,
    unique:true
  },
  profilePic: String,
  role:{
    type:String,
    enum: ['Employee', 'Admin'],
    default: 'Employee'
  }
},{
  timestamps:true
})

userSchema.plugin(pln, {usernameField: 'email'})

module.exports = mongoose.model('User', userSchema)