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
  area:{
    type:String,
    enum: ['Employee', 'HR', 'Admin']
  }
},{
  timestamps:true
})

userSchema.plugin(pln, {usernameField: 'email'})

module.exports = mongoose.model('User', userSchema)