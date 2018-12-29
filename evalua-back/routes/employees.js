const express = require('express')
const Employee = require('../models/Employee')
const router = express.Router()
const passport = require('../helpers/passport')

const isAuth = (req, res, next) => {
  if(req.isAuthenticated()) return next()
  return res.status(403).json({message:'You cant entry'})
}

//List
router.get('/employee', (req, res, next)=>{
  Emmployee.find()
    .then(allTheEmployees=>{
      res.json(allTheEmployees)
    })
    .catch(e=>{
      res.json(e)
    })
})

//Detail
router.get('/employee/:id', (req, res, next)=>{
  Employee.findById(req.params.id)
    .then(response=>{
      res.json(response)
    })
    .catch(e=>{
      res.json(e)
    })
})

//Add (only admin)
router.post('/new', isAuth, (req,res,next)=>{

})

module.exports = router