import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  function onChangeInput(e) {
    setQuery(e.target.value);
  }

  function onFormSubmit(e) {
    e.preventDefault();
    if (query === '') {
      return toast.warning("You can't do a search on an empty string");
    }
    onSubmit(query);
    setQuery('');
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" value={query} onChange={onChangeInput} />
      <button type="submit">Search</button>
      <ToastContainer />
    </form>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
