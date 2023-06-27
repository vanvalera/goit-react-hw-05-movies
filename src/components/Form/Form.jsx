// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import css from './Form.module.css';

// const Form = ({ searchMovies }) => {
//   const [query, setQuery] = useState('');

//   const handleInputChange = e => {
//     setQuery(e.target.value);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     searchMovies(query.toLowerCase());
//   };

//   return (
//     <div className={css.form_box}>
//       <form onSubmit={handleSubmit} className={css.form}>
//         <input
//           type="text"
//           name="query"
//           autofocus
//           value={query}
//           onChange={handleInputChange}
//         />
//         <button type="submit">Seacrh</button>
//       </form>
//     </div>
//   );
// };

// Form.propTypes = {
//   searchMovies: PropTypes.func.isRequired,
// };

// export default Form;
