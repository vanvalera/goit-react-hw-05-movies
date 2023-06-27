import { fetchSearchKeyword } from 'services/api';
import { useState } from 'react';
import Loader from 'components/Loader/Loader';
import EditorList from './EditorList';
import css from './Movies.module.css';

const Movies = () => {
  const [searchFilms, setsearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMovieText, setNoMovieText] = useState(false);

  const searchMovie = event => {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    const queryMovie = event.target.elements.searchMovie.value;

    setLoading(true);

    fetchSearchKeyword(queryMovie)
      .then(searchResults => {
        setsearchFilms(searchResults);
        setNoMovieText(searchResults.length === 0);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <main className={css.main}>
      <form onSubmit={searchMovie}>
        <input type="text" name="searchMovie" />
        <button type="submit">Search</button>
      </form>

      {loading && <Loader />}

      {noMovieText && (
        <p>Sorry. There are no movies with this request. Please try again.</p>
      )}

      {searchFilms && <EditorList films={searchFilms} />}
    </main>
  );
};

export default Movies;
