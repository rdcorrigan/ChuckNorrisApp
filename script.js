// Chuck Norris API
// https://api.chucknorris.io/

const imageDiv = document.querySelector('#imageDiv');
const jokeDiv = document.querySelector('#jokeDiv');
const img = document.createElement('img');
const button = document.querySelector('button');

const images = [
  'https://images02.military.com/sites/default/files/2021-04/chucknorris.jpeg',
  'https://mf-cnorris.s3.amazonaws.com/assets/uploads/2016/10/19123509/timeline-05.jpg',
  'https://api.time.com/wp-content/uploads/2015/03/chuck-norris-movies-08.jpg',
  'https://flxt.tmsimg.com/assets/73040_v9_ba.jpg',
  'https://pbs.twimg.com/media/ErkMbXtUcAELm6O.jpg',
  'https://www.usatoday.com/gcdn/presto/2020/03/10/USAT/14860a5d-3ae8-4049-b4b5-5a02e14c4721-Chuck_Norris_01.JPG',
  'https://hips.hearstapps.com/hmg-prod/images/gettyimages-150327735-copy.jpg',
  'https://m.media-amazon.com/images/M/MV5BYmMwMTAwNjQtN2ZhMS00NmFjLWI0YmEtOWRlZmE3ZTM5YjljXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_.jpg',
  'https://i1.sndcdn.com/artworks-gUifhrQ5MghA7vqL-yMPi9w-t500x500.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwlYI1aTITjvGpSD-64PQOZOYsw-2Uxe5aOA&usqp=CAU',
  'https://flxt.tmsimg.com/assets/p8704_p_v8_af.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMahqNcgX2LSnT7A7S00-UZKivH5PWxcyO0A&usqp=CAU',
  'https://images02.military.com/sites/default/files/styles/full/public/2023-05/1time%20chuck%20norris%20water%201200.jpg',
]

const random = () => Math.floor(Math.random() * images.length);
img.src = images[random()]
img.width = 300;
img.height = 300;
imageDiv.append(img);

const fetchJoke = async function() {
  const resp = await fetch('https://api.chucknorris.io/jokes/random');
  const data = await resp.json();
  return data.value;
}

const displayJoke = async function() {
  try {
    const joke = await fetchJoke();
    jokeDiv.textContent = joke;
  } catch {
    console.log('couldnt fetch joke');
  }
}

displayJoke();
button.addEventListener('click', () => {
  window.location.reload()
})