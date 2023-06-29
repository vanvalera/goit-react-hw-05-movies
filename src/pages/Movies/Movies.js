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
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }
    if (query) {
      setSearchQuery(query);
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
  }, [setSearchParams, searchParams]);

  const searchMovie = query => {
    setSearchParams({ query });
  };

  return (
    <main className={css.main}>
      <MovieSearchForm
        searchMovie={searchMovie}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {loading && <Loader />}

      {noMovieText && (
        <p>Sorry. There are no movies with this request. Please try again.</p>
      )}

      {searchFilms && <EditorList films={searchFilms} />}
    </main>
  );
};

export default Movies;
