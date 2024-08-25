const squares = document.querySelectorAll('.square')
const cockroach = document.querySelector('.cockroach')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('cockroach')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('cockroach')

  hitPosition = randomSquare.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})

function moveCockroach() {
  timerId = setInterval(randomSquare, 500)
}

moveCockroach()

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime

  if (currentTime == 0) {
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    alert('ИГРА ОКОНЧЕНА! Ваш финальный счёт: ' + result)
  }

}

let countDownTimerId = setInterval(countDown, 1000)
