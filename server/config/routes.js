var questions = require('./../controllers/exams.js');
var path = require('path');

module.exports = function(app){

    app.get('/login', function(req,res){
        console.log('root route');
        res.redirect('/');
    });

    app.get('/all', function(req,res){
        console.log('display all the questions');
        questions.show(req,res);
    });

    app.post('/new_que/:que/:desc/:name', function(req,res){
        console.log('inside add que...');
        questions.addQue(req,res);
    });
        

    app.get('/show/:id',function(req,res){
        console.log('display answer');
        questions.showAns(req,res);
    })

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });
}