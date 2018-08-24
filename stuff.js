var counter = function(arr){
  return 'there are '+arr.length+' elements in this array'
};
var adder = function(a,b){
  return `sum is ${a+b}`;
}
module.exports.pi = 3.142

//console.log(counter(['dan','yes','po']));
module.exports.counter = counter;
module.exports.adder = adder;
