import { useEffect, useState } from "react"; // Importa as funções 'useEffect' e 'useState' do módulo 'react'

import logo from "../assets/devflix.png"; // Importa o arquivo de imagem 'devflix.png' do diretório '../assets'

import searchIcon from "../assets/search.svg"; // Importa o arquivo de imagem 'search.svg' do diretório '../assets'

import "./App.css"; // Importa o arquivo de estilo CSS 'App.css'
import MovieCard from "../componentes/movieCard/movieCard";
import Serie from "./serie.jsx";
import Footer from "../componentes/footer/footer";

const App = () => {
  // Declaração do componente funcional 'App'

  const [searchTerm, setSearchTerm] = useState(""); // Declara o estado 'searchTerm' e a função 'setSearchTerm' para atualizá-lo
  const [movies, setMovies] = useState([]);
  const apiKey = "e4d577fa"; // Declara uma chave de API
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`; // Monta a URL da API com a chave de API

  useEffect(() => {
    // Utiliza o hook 'useEffect'
    searchMovies("batman"); // Chama a função 'searchMovies' com o argumento "Batman" quando o componente é montado
  }, []);

  const searchMovies = async (title) => {
    // Declaração da função assíncrona 'searchMovies' com o argumento 'title'

    const response = await fetch(`${apiUrl}&s=${title}`); // Faz uma requisição assíncrona para a API usando a URL construída

    const data = await response.json(); // Converte a resposta da requisição em formato JSON
    console.log(data);
    setMovies(data.Search);
  };
  const handleKeyPress = (e) => {
    // Declaração da função 'handleKeyPress' com o argumento 'e' (evento)
    e.key === "Enter" && searchMovies(searchTerm); // Verifica se a tecla pressionada foi "Enter" e chama a função 'searchMovies' com o valor de 'searchTerm'
  };

  // fetch (apiUrl).then((response) => response.json()).then((data) => console.log(data));outro jeito de fazer o negocio de cima

  return (
    <div id="app">
      {" "}
      {/*Elemento raiz do componente*/}
      <div className="logo">
        {/* Div para exibir o logo */}
        <a href={Serie}>
          {" "}
          <img src={logo} alt="logo devflix" />
        </a>{" "}
        {/* Exibe a imagem do logo importada */}
      </div>
      <div className="search">
        {/* Div para a barra de pesquisa */}
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o estado 'searchTerm' com o valor do campo de entrada
          onKeyDown={
            handleKeyPress
          } /*Chama a função 'handleKeyPress' quando uma tecla é pressionada*/
          placeholder="Pesquise por filmes"
        />{" "}
        {/* Texto de placeholder do campo de entrada*/}
        <img
          src={searchIcon}
          alt="Icone de pesquisa"
          onClick={() => searchMovies(searchTerm)}
        />
        {/*Chama a função 'searchMovies' com o valor de 'searchTerm' quando a imagem é clicada */}
      </div>
      {movies?.length > 0 ? ( // Início de uma expressão JSX condicional baseada no tamanho da matriz 'movies'
        <div className="container">
          {/* Abre uma div com a classe CSS "container" */}
          {movies.map(
            (
              movie /* Renderiza um componente 'MovieCard' passando 'movie' como prop */
            ) => (
              <MovieCard
                key={movie.imdbID}
                movies={movie}
              /> /* Renderiza um componente 'MovieCard' passando 'movie' como prop */
            )
          )}
        </div> // Fecha a div com a classe "container"
      ) : (
        // Caso contrário, se a matriz 'movies' estiver vazia
        <div className="empty">
          {/* Abre uma div com a classe CSS "empty" */}
          <h2>Nenhum filme encontrado 🥹</h2>{" "}
          {/* Renderiza um cabeçalho indicando que nenhum filme foi encontrado */}
        </div> // Fecha a div do 'empty'
      )}
      {/*Fim da expressão JSX condicional */}
      <Footer link={"https://github.com/"}>mvn</Footer>
    </div>
  );
};

export default App; // Exporta o componente 'App' como padrão
