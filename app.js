var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname,'public')));

app.get('/',  function(req, res){
    res.render('index.html')
});

app.listen(8080, function(){
    console.log('all yourse boss');
})