import { useEffect, useState } from "react";
import styles from "./movieDescription.module.css";
import devFlix from "/favicon.png";
const MovieDesc = ({ movies, click }) => {
  const apiKey = "927ee5bf";
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}&i=${movies.imdbID}`;
  const [moviesDesc, setMoviesDesc] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMoviesDesc(data))
      .catch((error) => console.error("Erro: ", error));
  }, [apiUrl]);

  const movie = moviesDesc;
  console.log(movie);
  return (
    <div className={styles.modalBackdrop} onClick={click}>
      <div className={styles.movieModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.movieInfo}>
          <img src={movies.Poster} alt={movie.Title} />
          <button className={styles.btnClose} onClick={click}>
            X
          </button>
          <div className={styles.movieType}>
            <div>
              <img src={devFlix} alt="icone da DEVFLIX" />
              {movie.Type}
              <h1>{movie.Title}</h1>
              <a
                href={`https://google.com/search?q=${encodeURIComponent(
                  movie.Title
                )}`}
                target="_blank"
              >
                ▶️Assistir
              </a>
            </div>
          </div>
        </div>
        <div className={styles.legobitman}>
          <div className={styles.containerFlex}>
           Avaliação: {movie.imdbRating}/10 | Duração: {movie.Runtime} |{" "}
            {movie.Year}{" "}
          </div>
          <div className={styles.containerFlex}>
            <p>Elenco: {movie.Actors}</p>
            <p>Gênero: {movie.Genre}</p>
          </div>
        </div>
        <div className={styles.desc}>
          <p>Sinopse: {movie.Plot}</p>
        </div>
      </div>
    </div>
  );
};
export default MovieDesc;
