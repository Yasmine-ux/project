const express = require('express')
const router = express.Router()

const Service = require('../models/collection')


router.post("/add", (req,res) => {
    const {title, category, description} = req.body
    const newService = new Service({
        title, category, description
    })
    newService.save()
    .then( data => res.json({ result: data }) )
    .catch( err => res.json({ error: err }) )
})


router.get("/",(req,res) => {
    Service.find()
    .then( data => res.json({ result: data }) )
    .catch( err => res.json({ error: err }) )
})


router.get("/:id",(req,res) => {
    const {id} = req.params
    Service.findOne({_id: id})
      .then( data => res.json({ result: data }) )
    .catch( err => res.json({ error: err }) )
})



router.delete("/remove/:id",(req,res) => {
    const {id} = req.params
    Service.findOneAndDelete({_id: id})
    .then( data => res.json({
        result: { status: true, message: "user deleted successfuly" } }))
    .catch( err => res.json({ error: err }) )
})


router.put("/update/:id",(req,res) => {
    const {id} = req.params
    const {title, category, description} = req.body
    Service.findOneAndUpdate({_id: id},{$set:{title, category, description}})
    .then( data => res.json({
        result: { status: true, message: "user updated successfuly" } }))
    .catch( err => res.json({ error: err }) )
})

module.exports = router