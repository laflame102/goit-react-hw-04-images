import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useState } from 'react';

export const Searchbar = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleInputChange = evt => setInput(evt.currentTarget.value);

  const handleSubmit = evt => {
    evt.preventDefault();

    if (input.trim() === '') {
      toast.error('Enter image name');
      return;
    }
    onSubmit(input);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          name="input"
          placeholder="Search images and photos"
          value={input}
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
