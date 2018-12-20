const express = require('express')
const Survey = require('../models/Survey')
const router = express.Router()

//List
router.get('/survey', (req, res, next)=>{
  Survey.find()
    .then(response=>{
      res.json(response)
    })
    .catch(e=>{
      res.json(e)
    })
})

//Detail
router.get('/survey/:id', (req, res, next)=>{
  Survey.findById(req.params.id)
    .then(response=>{
      res.json(response)
    })
    .catch(e=>{
      res.json(e)
    })
})

module.exports = router