import { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ searchMovies }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault;
    searchMovies(query.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        autofocus
        value={query}
        onChange={handleInputChange}
      />
      <button type="submit">Seacrh</button>
    </form>
  );
};

Form.propTypes = {
  searchMovies: PropTypes.func.isRequired,
};

export default Form;
