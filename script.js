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
  console.log('results', data)
  movieContainer.innerHTML = ''
  const movies = data.results
  const movieCount = data.total_results
  const movieSection = movieCard(movies, movieCount)
  movieContainer.appendChild(movieSection)
  //   console.log('Data:', data)
}

function movieMap (movies) {
  return movies.map((movie) => {
    if (movie.poster_path) {
      return `<div id="movie-card"><h2>${movie.original_title}</h2><img src=${IMG_URL + movie.poster_path}
      data-movie-id=${movie.id}/> </br><p>${movie.overview}</p></div>
      `
    }
  })
}
function movieCard (movies, movieCount) {
  const movieDiv = document.createElement('div')
  movieDiv.setAttribute('class', 'movie-results')
  if (movieCount === 0) {
    const noResults = `
        <h1>No results found, please try again</h1>`
    movieDiv.innerHTML = noResults
    return movieDiv
  } else {
    const movieTemplate = `
   <section>
     ${movieMap(movies).join('')}
   </section>
  `

    movieDiv.innerHTML = movieTemplate
    return movieDiv
  }
}
