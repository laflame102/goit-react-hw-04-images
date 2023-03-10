import PropTypes from 'prop-types';

export const Button = ({ onLoad }) => {
  return (
    <button className="Button" type="button" onClick={onLoad}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onLoad: PropTypes.func.isRequired,
};
