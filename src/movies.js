const movieList = document.getElementById('movie-list');

const insertPoster = (movie)=>{
  const poster = `<img src='${movie['Poster']}' height='160'>`;

  movieList.insertAdjacentHTML('beforeend', `<li>${poster}</li>`)
}

const fetchPosters = (movieName) => {
  const url = `http://www.omdbapi.com/?s=${movieName}&apikey=adf1f2d7`

  movieList.innerHTML = ''

  fetch(url)
    .then(response => response.json())
    .then((data)=>{
        data['Search'].forEach(insertPoster);
     });
}

const submitForm = (event)=>{
  event.preventDefault();
  const movieName = document.getElementById('movie-name').value;

  fetchPosters(movieName);
}

export { fetchPosters, submitForm };
