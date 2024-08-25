// Достаём все элементы с классом "square" и сохраняем их в NodeList
const squares = document.querySelectorAll('.square')
// Достаём элемент с классом "cockroach"
const cockroach = document.querySelector('.cockroach')
// Достаём элемент с id "time-left"
const timeLeft = document.querySelector('#time-left')
// Достаём элемент с id "score"
const score = document.querySelector('#score')

// Создаём переменную для хранения результата игры
let result = 0
// Создаём переменную для хранения позиции попадания
let hitPosition
// Создаём переменную для хранения оставшегося времени
let currentTime = 60
// Создаём переменную для хранения идентификатора таймера
let timerId = null

// Выбираем случайный квадрат и добавляет класс "cockroach"
function randomSquare() {
  // Удаляет класс "cockroach" со всех квадратов
  squares.forEach(square => {
    square.classList.remove('cockroach')
  })

  // Выбираем случайный квадрат
  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('cockroach')

  // Обновляем позицию попадания
  hitPosition = randomSquare.id
}

// Добавляем обработчик события клик на каждый квадрат
squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    // Если кликнули на квадрат с классом "cockroach", увеличивает счет
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})

// Запускает игру, перемещая таракана каждые 500мс
function moveCockroach() {
  timerId = setInterval(randomSquare, 500)
}

// Запускает игру
moveCockroach()

// Считает время, оставшееся до конца игры
function countDown() {
  currentTime--
  timeLeft.textContent = currentTime

  // Если время истекло, останавливает таймеры и выводит сообщение
  if (currentTime == 0) {
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    alert('ИГРА ОКОНЧЕНА! Ваш финальный счёт: ' + result)
  }

}

// Запускает таймер обратного отсчета
let countDownTimerId = setInterval(countDown, 1000)