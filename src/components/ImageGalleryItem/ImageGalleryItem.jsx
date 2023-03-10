import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ url, title }) => {
  return <img className="ImageGalleryItem-image" src={url} alt={title} />;
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
