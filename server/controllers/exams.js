var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = {

    show : function(req,res){
        Question.find({}, function(err, questions){
            console.log(questions);
            res.json(questions);
        })
    },

    addQue : function(req,res){
        console.log('inside controllers');
        console.log('params que...',req.params.name);
        var question = new Question(
            {
                questioner: req.params.name,
                question : req.params.que,
                description : req.params.desc,
            }
        );
        question.save(function(err){
            if(err){
                console.log("something went wrong...");
            }
            else{
                console.log('added question...');
                // res.redirect('/all');
            }
        })
    },

    showAnswer : function(req,res){
        Question.findOne({_id : req.params.id}, function(err, question){
            console.log(question);
            res.json(question);
        })
    }

}
