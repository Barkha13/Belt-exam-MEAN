var recipes = require('./../controllers/exams.js');
var path = require('path');

module.exports = function(app){

    app.get('/login', function(req,res){
        console.log('root route');
        res.redirect('/');
    });

    app.post('/new_que/:name/:que/:desc', function(req,res){
        console.log('inside add que...');
        res.addQue();

    });
        

    

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });
}