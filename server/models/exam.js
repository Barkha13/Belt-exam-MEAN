var mongoose = require('mongoose');

var QaSchema = new mongoose.Schema({
    questioner: {type: String, required: true, minlength: 3},
    question : {type: String, required: true, minlength: 10},
    answer : [{type: String, required: true, minlength: 10}],
    answerer : [{type: String, required: true, minlength: 3}],
    likes : {type: Number},
})

mongoose.model('Question', QaSchema);