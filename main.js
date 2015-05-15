
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

document.querySelector('#answer3').textContent = gbp[0].title + ' costs \£' + gbp[0].price;

///////// Question 4 /////////
var wood = items.filter(function(item){
  if (item.materials.indexOf('wood') >= 0)
    return item;
});

var $answer4 = document.querySelector('#answer4');
$answer4.textContent = '';

wood.forEach(function(list){
  $answer4.textContent += (list.title + '\n' + '\n');
});

///////// Question 5 /////////

///////// Question 6 /////////