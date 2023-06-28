import { fetchSearchKeyword } from 'services/api';
import { useState, useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import EditorList from 'pages/EditorList/EditorList';
import css from './Movies.module.css';
import MovieSearchForm from 'components/MovieSearchForm/MovieSeacrhForm';

const Movies = () => {
  const [searchFilms, setsearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMovieText, setNoMovieText] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const lastQuery = localStorage.getItem('lastQuery');
    if (lastQuery) {
      setSearchQuery(lastQuery);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('lastQuery', searchQuery);
  }, [searchQuery]);

  const searchMovie = query => {
    setLoading(true);

    fetchSearchKeyword(query)
      .then(searchResults => {
        setsearchFilms(searchResults);
        setNoMovieText(searchResults.length === 0);
        setSearchQuery(query);
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
