// import { toast } from 'react-toastify';
// import { pixabay } from 'services';
import { useState } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
// import { Button } from 'components/Button/Button';
// import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';

export const ImageGallery = ({ items, inputValue }) => {
  // const [images, setImages] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     // setLoading(true);
  //     // setPage(1);

  //     try {
  //       const response = await pixabay(inputValue, page);
  //       setImages(prevImages => [...prevImages, ...response.hits]);
  //     } catch (error) {
  //       toast.error(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchImages();
  // }, [inputValue, page]);

  // async componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevProps.inputValue !== this.props.inputValue ||
  //     prevState.page !== this.state.page
  //   ) {
  //     this.setState({ loading: true });

  //     if (prevProps.inputValue !== this.props.inputValue) {
  //       this.setState({ page: 1 });
  //     }

  //     try {
  //       const response = await pixabay(this.props.inputValue, this.state.page);
  //       this.setState({ images: [...this.state.images, ...response.hits] });
  //     } catch (error) {
  //       toast.error(error.message);
  //     } finally {
  //       this.setState({ loading: false });
  //     }
  //   }
  // }

  // const handleLoad = () => {
  //   setLoading(true);
  //   setPage(prevPage => prevPage + 1);
  // };

  const toggleModal = image => {
    //  this.setState(({ showModal }) => ({ showModal: !showModal }));
    setShowModal(state => !state);
    setSelectedImage(image);
  };

  return (
    <div>
      {/* {loading && <Loader />} */}
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
      {/* {images.length > 0 && <Button onLoad={handleLoad} />} */}
    </div>
  );
};
