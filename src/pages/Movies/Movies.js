import { fetchSearchKeyword } from 'services/api';
import { useState, useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import EditorList from 'pages/EditorList/EditorList';
import css from './Movies.module.css';
import MovieSearchForm from 'components/MovieSearchForm/MovieSeacrhForm';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchFilms, setsearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMovieText, setNoMovieText] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');
  useEffect(() => {
    if (!query) {
      return;
    }

    setLoading(true);
    fetchSearchKeyword(query)
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
  }, [query]);

  const searchMovie = query => {
    setSearchParams({ query });
  };

  return (
    <main className={css.main}>
      <MovieSearchForm searchMovie={searchMovie} searchQuery={query} />

      {loading && <Loader />}

      {noMovieText && (
        <p>Sorry. There are no movies with this request. Please try again.</p>
      )}

      {searchFilms && <EditorList films={searchFilms} />}
    </main>
  );
};

export default Movies;
