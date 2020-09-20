console.log('Hello world')
const API_KEY = '84ae90e18d1d61fd354d732747ae369e'
const BASE_URL = 'https://api.themoviedb.org'
const IMG_URL = 'https://image.tmdb.org/t/p/w200'

const searchButton = document.querySelector('#searchButton')
const input = document.querySelector('#searchValue')
const movieContainer = document.querySelector('#movie-container')

searchButton.onclick = function (e) {
  e.preventDefault()
  //   console.log('onclick is working')
  const inputValue = input.value
  //   console.log('input:', inputValue)

  const url = BASE_URL + `/3/search/movie?api_key=${API_KEY}&query=${inputValue}`

  fetch(url)
    .then((results) => results.json())
    .then(renderResults)
    .catch((error) => {
      console.log('Error:', error)
    })
}

function renderResults (data) {
  movieContainer.innerHTML = ''
  const movies = data.results
  const movieSection = movieCard(movies)
  movieContainer.appendChild(movieSection)
  //   console.log('Data:', data)
}

function movieLoop (movies) {
  return movies.map((movie) => {
    if (movie.poster_path) {
      return `<img src=${IMG_URL + movie.poster_path}
      data-movie-id=${movie.id}/>`
    }
  })
}
function movieCard (movies) {
  const movieDiv = document.createElement('div')
  movieDiv.setAttribute('class', 'movie-results')

  const movieTemplate = `
   <section>
     ${movieLoop(movies)}
   </section>
   <div class="content>
    <p id="content-exit">x</p>
    </div>
  `

  movieDiv.innerHTML = movieTemplate
  return movieDiv
}
