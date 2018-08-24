var express = require ('express');
var app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

app.get('/', function(req,res){
  //res.render(_dirname + '/index.html');
  res.render('index');
});
app.get('/contact', function(req,res){
  //res.sendFile(__dirname + '/contact.html')
  res.render('contact');
});

app.get('/profile/:name', function(req,res){
  //res.send('You requesated to see a profile with the name of ' + req.params.name);
  var data = {age: 29, job: 'ninja', hobbie: ['eating', 'fighitng', 'fishing']};
  res.render('profile', {person: req.params.name, data: data});
});


app.listen(3000);
