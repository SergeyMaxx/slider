let upBtn = document.querySelector('.up-button')
let downBtn = document.querySelector('.down-button')
let sidebar = document.querySelector('.sidebar')
let mainSlide = document.querySelector('.main-slide')
let slideCount = mainSlide.querySelectorAll('div').length
let container = document.querySelector('.container')

sidebar.style.top = `-${(slideCount - 1) * 100}vh`

let activeSlideIndex = 0

upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))
document.addEventListener('keydown', event => {
  if (event.key === 'ArrowUp') {
    changeSlide('up')
  } else if (event.key === 'ArrowDown') {
    changeSlide('down')
  }
})

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIndex++
    if (activeSlideIndex === slideCount) activeSlideIndex = 0
  } else if (direction === 'down') {
    activeSlideIndex--
    if (activeSlideIndex < 0) activeSlideIndex = slideCount - 1
  }

  let height = container.clientHeight

  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
}