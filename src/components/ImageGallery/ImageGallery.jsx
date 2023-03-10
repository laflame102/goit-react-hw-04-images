import PropTypes from 'prop-types';
import { useState } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Modal } from 'components/Modal/Modal';

export const ImageGallery = ({ items, inputValue }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleModal = image => {
    setShowModal(state => !state);
    setSelectedImage(image);
  };

  return (
    <div>
      {items && (
        <ul className="ImageGallery">
          {items.map(({ id, webformatURL, largeImageURL }) => (
            <li
              key={id}
              className="ImageGalleryItem"
              onClick={() => toggleModal(largeImageURL)}
            >
              <ImageGalleryItem url={webformatURL} title={inputValue} />
            </li>
          ))}
        </ul>
      )}
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={selectedImage} alt="g" />
        </Modal>
      )}
    </div>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  inputValue: PropTypes.string.isRequired,
};
