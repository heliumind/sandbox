const app = document.getElementById('root');

const logo = document.createElement('img')
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

function createCard(film) {
  // Create a div with a card class
  const card = document.createElement('div');
  card.setAttribute('class', 'card');

  // Create an h1 and set the text content to the film's title
  const h1 = document.createElement('h1');
  h1.textContent = film.title;

  // Create a p and set the text content to the film's description
  const p = document.createElement('p');
  film.description = film.description.substring(0, 300) // Limit to 300
  p.textContent = `${film.description}...` // End with an ellipses

  // Append the cards to the container element
  container.appendChild(card);

  // Each card will contain an h1 and a p
  card.appendChild(h1);
  card.appendChild(p); 
}

async function getFilms(url) {
  try {
    const response = await fetch(url);
    const films = await response.json();
    films.forEach(film => {
      createCard(film);
    });
  } catch (error) {
    // Handle error in catch
    console.log(error);
  }
}

// Consume Ghibli API
const url = 'https://ghibliapi.vercel.app/films'; 
getFilms(url);
