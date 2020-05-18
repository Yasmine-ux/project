const express = require('express')
const router = express.Router()

const Service = require('../models/collection')


router.post("/add", (req,res) => {
    const {name, category, description} = req.body
    const newService = new Service({
        name, category, description
    })
    newService.save()
    .then(services => res.send(services))
    .catch(err => console.log(err))
})


router.get("/",(req,res) => {
    Service.find()
    .then(services => res.send(services))
    .catch(err => console.log(err))
})


router.get("/:id",(req,res) => {
    const {_id} = req.params
    Service.findOne({_id})
      .then(services => res.send(services))
    .catch(err => console.log(err))
})



router.delete("/remove/:id",(req,res) => {
    const {_id} = req.params
    Service.findOneAndDelete({_id:_id})
    .then(services => res.send("success"))
    .catch(err => console.log(err))
})


router.put("/update/:id",(req,res) => {
    const {_id}=req.params
    const {name, category, description}=req.body
    Service.findOneAndUpdate({_id},{$set:{name, category, description}})
    .then(Services => res.send("Service Updated"))
    .catch(err => console.log(err))
})

module.exports = router