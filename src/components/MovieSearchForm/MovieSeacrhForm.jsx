import { useState, useEffect } from 'react';

const MovieSearchForm = ({ searchMovie, searchQuery, setSearchQuery }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    setQuery(searchQuery);
  }, [searchQuery]);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchQuery(query);
    searchMovie(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchMovie"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default MovieSearchForm;
