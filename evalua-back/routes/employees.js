const express = require('express')
const Employee = require('../models/Employee')
const router = express.Router()

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

module.exports = router