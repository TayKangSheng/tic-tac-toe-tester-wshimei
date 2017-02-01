// var foods = ['Pancakes', 'Waffles', 'French Toast']
// var listOfLi = [];
// var doc = document
//
// foods.forEach(function(foods) {
//   var li = document.createElement('li')
//   li.textContent = foods
//   listOfLi.push(li)
// })
//
// var ul = document.createElement('ul')
// listOfLi.forEach(function(list) {
//   ul.appendChild(list)
// })
//
// var h1 = document.createElement('h1')
//
//
// doc.body.appendChild(ul)
// doc.body.appendChild(li)

var button = document.querySelector('button')
var ulList = document.querySelector('ul')
var pancakes = document.querySelector('li')
var count = 1

function movePancakes () {
  if (count % 3 === 1) {
    ulList.insertBefore(pancakes, document.querySelector('li:last-child'))
    count++
  } else if (count % 3 === 2) {
    ulList.appendChild(pancakes)
    count++
  } else if (count % 3 === 0) {
    ulList.insertBefore(pancakes, document.querySelector('li:first-child'))
    count++
  }
}
button.addEventListener('click', movePancakes)
