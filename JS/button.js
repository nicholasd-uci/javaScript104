// BEST PRACTICE
let count = 0
// we are setting the .textContent to be the value of "count"
document.getElementById('count').textContent = count
// grab the Element By its ID and the use DOT NOTATION
// .addEventListener('click', function here ) => it will always be 'click' and then a Arrow Function () => {}
document.getElementById('myBtn').addEventListener('click', () => {
  // Inside of these { } is a fully written instruction set
  console.log('ping')
  count++
  document.getElementById('count').textContent = count
})
//       **Note**
// You can also call a function above the EventListener
//    EX) const myFunction = () => {}
// This lets you use any type of selector - You just have to use # symbol
// document.querySelector('#myBtn')
// document.querySelectorAll('#myBtn')