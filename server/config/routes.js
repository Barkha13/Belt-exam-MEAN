var recipes = require('./../controllers/exams.js');
var path = require('path');

module.exports = function(app){

    app.get('/login', function(req,res){
        console.log('root route');
        res.redirect('/');
    });

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });
}