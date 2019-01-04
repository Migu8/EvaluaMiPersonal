const mongoose = require('mongoose')
const Schema = mongoose.Schema

const surveySchema = new Schema({
  year: Number,
  question1: String,
  question2: String,
  question3: String,
  question4: String,
  question5: String,
  comment: String,
  evaluator: String,
  evaluated: String
  // owner:{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Employee'
  // }
},{
  timestamps:true
})

module.exports = mongoose.model('Survey', surveySchema)