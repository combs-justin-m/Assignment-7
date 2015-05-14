
// items.forEach(function(item) {
//   $answer1.appendChild(document.createTextNode(item.price + '/n'))
// });

console.log(items);

// Question 1 //
var allPrices = items.map(function(item){
  return item.price;
});
// Sum //
var sum = allPrices.reduce(function(a, b){
  return a + b;
});
// Average //
var avg = sum / allPrices.length;
// Answer //
var answer1 = avg.toFixed(2);

var $answer1 = document.querySelector('#answer1');

$answer1.textContent = '$' + answer1;