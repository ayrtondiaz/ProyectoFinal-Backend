const mongoose = require('mongoose')

const esquemaProducto = new mongoose.Schema({
    //_id: {type: String},
    name: {type: String, require: true},
    description: {type: String, require: true},
    price: {type: Number, require: true},
    thumnail: {type: String, require: true},
    stock: {type: Number, require: true},
    categoria: {type: String, require: true},
    cantidad: {type: String, require: false},
    idP: {type: Number, require: true},
    idC: {type: Number, require: false},
    time: {type: String, require: false}
})

module.exports = mongoose.model('productos', esquemaProducto)