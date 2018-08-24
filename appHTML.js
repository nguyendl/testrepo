//console.log('heyninjas');
/*
var time = 0;
var timer = setInterval(function(){
  time +=2;
  console.log(time + ' seconds hve passed');
  if (time > 5){
    clearInterval(timer);
  }
},2000);*/


//var stuff = require('./stuff');
//console.log(stuff.counter(['dan','yes','po']));
//console.log(stuff.adder(stuff.pi, 5));


//var events = require('events');
/*var myEmitter = new events.EventEmitter();
myEmitter.on('someEvent', function(mssg){
  console.log(mssg);
});

myEmitter.emit('someEvent','the eveent was emitted');
*/
/*
var util = require('util');
var Person = function(name){
  this.name = name;
};
util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var dan = new Person ('dan');
var ryan = new Person ('Ryan');

var people = [james, dan, ryan];
people.forEach(function(person){
  person.on('speak', function(mssg){
    console.log(person.name + ' said: '+mssg);
  });
});

james.emit('speak', 'heydudes');

*/



//next part
/*var fs = require('fs');
fs.readFile('readMe.txt','utf8', function(err, data){
  fs.writeFile('writeMe.txt', data);
});
*/




var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){
  console.log('request was made: ' +req.url);
  if(req.url === '/home' || req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  }else if(req.url === '/contact-us'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  }else if(req.url==='/api/ninjas'){
    var ninjas =[{name: 'ryu', age: 29}, {name: 'yoshi', age:32}];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(ninjas));
  }else{
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
  /*res.writeHead(200, {'Content-Type': 'application/json'});
  var myObj = {
    name: 'Dan',
    job: 'work',
    age: '22'
  };
  res.end(JSON.stringify(myObj));*/
  //var myReadStream = fs.createReadStream(__dirname + , 'utf8');
  //myReadStream.pipe(res);
});
server.listen(3000);
console.log('listening to port 3000');
