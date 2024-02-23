var correctAnswer = Math.ceil(Math.random() * 100)
var form = document.querySelector('#guess')
var input = document.querySelector('input')
var response = document.querySelector('.response')

console.log(correctAnswer)

form.addEventListener('submit', guess)

function guess(e) {
  e.preventDefault()
  var theirAnswer = input.value
  
  if (theirAnswer == correctAnswer) {
    response.innerHTML = 'Yay! You did it!'
    correctAnswer = Math.ceil(Math.random() * 100)
    var interval = setInterval(function(){
      var red = Math.floor(Math.random() * 255)
      var green = Math.floor(Math.random() * 255)
      var blue = Math.floor(Math.random() * 255)
      document.body.style.background = `rgb(${red}, ${green}, ${blue})`
    }, 20)
    setTimeout(function(){
      clearInterval(interval)
      document.body.style.background = '#fff'
      response.innerHTML = ''
      input.value = ''
      console.log(correctAnswer)
    }, 5000)
  } else if (theirAnswer > correctAnswer) {
    response.innerHTML = 'Too Big'
  } else if (theirAnswer < correctAnswer) {
    response.innerHTML = 'Too Small'
  } else {
    response.innerHTML = "That's not a number dummy!"
  }
}