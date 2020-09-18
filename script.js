console.log('Hello world')

const searchButton = document.querySelector('#searchButton')
const input = document.querySelector('#searchValue')

searchButton.onclick = function (e) {
  e.preventDefault()
  //   console.log('onclick is working')
  const inputValue = input.value
//   console.log('input:', inputValue)
}
