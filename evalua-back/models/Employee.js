const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
  name: String,
  lastName: String,
  address: String,
  age: Number,
  telephone:String,
  gender: String,
  married: Boolean,
  email: String,
  profilePic: String,
  role:{
    type:String,
    enum: ['Employee', 'Admin'],
    default: 'Employee'
  }
},{
  timestamps:true
})

module.exports = mongoose.model('Employee', employeeSchema)