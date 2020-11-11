const movieList = document.getElementById('movie-list');

const form = document.getElementById('search');

form.addEventListener('submit',(event)=>{
  event.preventDefault();
  const movieName = document.getElementById('movie-name').value;

  const url = `http://www.omdbapi.com/?s=${movieName}&apikey=adf1f2d7`

  movieList.innerHTML = ''

  fetch(url).then(response => response.json())
            .then((data)=>{
                data['Search'].forEach((movie)=>{

                  const title = `<h3>${movie['Title']}</h3>`;
                  const poster = `<img src='${movie['Poster']}'>`;

                  movieList.insertAdjacentHTML('beforeend', `<li>${title}${poster}</li>`)
                });
             });







});


