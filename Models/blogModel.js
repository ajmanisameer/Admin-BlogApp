var mongoose = require('mongoose');

var obj = new mongoose.Schema({
    Title: { type: String },
    Description: { type: String },
    Textarea: { type: String }
});

module.exports = mongoose.model('Blog', obj);
