console.log('Hello world')
const API_KEY = '84ae90e18d1d61fd354d732747ae369e'
const BASE_URL = 'https://api.themoviedb.org'

const searchButton = document.querySelector('#searchButton')
const input = document.querySelector('#searchValue')

searchButton.onclick = function (e) {
  e.preventDefault()
  //   console.log('onclick is working')
  const inputValue = input.value
  //   console.log('input:', inp utValue)

  const url = BASE_URL + `/3/search/movie?api_key=${API_KEY}&query=${inputValue}`

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log('Data:', data)
    })
    .catch((error) => {
      console.log('Error:', error)
    })
}
