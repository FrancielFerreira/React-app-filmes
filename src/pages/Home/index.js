import { Container } from "../../components/container";
import { Movielist } from "../../components/movieList";
import { Movie } from "../../components/movie";
import { APIKey } from "../../apikey/key";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

function Home() {

  const [movies, setMovies] = useState([]);
  const image_path = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {
    //consumir api

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.results)
    })
  }, [])

  return (
    <Container>
      <h1>Movies</h1>
      <Movielist>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <Link to={`/details/${movie.id}`}>
                <img src={`${image_path}${movie.poster_path}`} alt={movie.title} />
              </Link>
              <p>{movie.title}</p>
            </Movie>
          );
        })}
      </Movielist>
      
      <footer>
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="Logo TMDb" />
        <p>This product uses <a href="https://www.themoviedb.org" target="_blank" rel="noreferrer">TMDB API</a>, but is not endorsed or certified by TMDB.</p>
      </footer>
    </Container>
  );
}

export default Home;
