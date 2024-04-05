const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    status:{type: String, default: "A Faire"}
}, {timestamps:true});

module.exports = mongoose.model('Todo', todoSchema);