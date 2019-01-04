const mongoose = require('mongoose')
const Schema = mongoose.Schema
const plm = require('passport-local-mongoose')

const employeeSchema = new Schema({
  name: String,
  lastName: String,
  address: String,
  age: Number,
  telephone:Number,
  gender: String,
  married: Boolean,
  email: String,
  profilePic: String,
  role:{
    type:String,
    enum: ['Employee', 'Admin'],
    default: 'Employee'
  }, 
  area:{
    type: String,
    enum: ['Operations', 'Management']
  }
},{
  timestamps:true
})

employeeSchema.plugin(plm, {usernameField: 'email'})

module.exports = mongoose.model('Employee', employeeSchema)