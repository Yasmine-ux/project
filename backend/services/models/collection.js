const mongoose = require('mongoose')
const schema = mongoose.Schema


const ServiceSchema = new schema ({
    title : {type: String},
    category : {type:  String},
    description : {type: String}
    // id_serviceProvider : {type: Number},
    // id_client : {type: Number}
})

module.exports = Service = mongoose.model('Service', ServiceSchema)