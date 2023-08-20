import PropTypes from 'prop-types';

export function Filter({ setParams, query }) {
  function onChangeInput(e) {
    const inputValue = e.target.value === '' ? {} : { movie: e.target.value };
    setParams(inputValue);
  }

  return (
    <label>
      Sort it
      <input type="text" value={query} onChange={onChangeInput} />
    </label>
  );
}

Filter.propTypes = {
  setParams: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};
