const express = require('express')
const Employee = require('../models/Employee')
const router = express.Router()

const isAuth = (req, res, next) => {
  if(req.isAuthenticated()) return next()
  return res.status(403).json({message:'You can not entry'})
}

//List
router.get('/employee', (req, res, next)=>{
  Emmployee.find()
    .then(allTheEmployees=>{
      res.json(allTheEmployees)
    })
    .catch(e=>{
      console.log('Hola')
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

//List of admins
router.get('/employee/admin', (req,res,next)=>{
  Employee.find({ role: { $eq: "Admin" } })
    .then(admins=>{
      res.json(admins)
    })
    .catch(e=>{
      res.json(e)
    })
})

//Add (only admin)
router.put('/new', isAuth, (req,res,next)=>{
  const { role } = req.body
  Employee.register(req.body)
  .then (employee =>{
    res.status(201).json(employee)
  })
  .catch(e=>{
    res.status(500).json(e)
  })
})

module.exports = router