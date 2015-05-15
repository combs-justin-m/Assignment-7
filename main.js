
// items.forEach(function(item) {
//   $answer1.appendChild(document.createTextNode(item.price + '\n'))
// });

console.log(items);

///////// Question 1 /////////
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

document.querySelector('#answer1').textContent = '$' + answer1;

///////// Question 2 /////////
var costBetween = items.filter(function(item){
  return (item.price > 14 && item.price < 18);
})

var $answer2 = document.querySelector('#answer2');
$answer2.textContent = '';

costBetween.forEach(function(list){
  $answer2.textContent += (list.title + '\n' + '\n');
});

///////// Question 3 /////////
var gbp = items.filter(function(item){
  return item.currency_code === "GBP";
});

document.querySelector('#answer3').textContent = gbp[0].title;