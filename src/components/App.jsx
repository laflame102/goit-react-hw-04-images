import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { pixabay } from 'services';
import { Loader } from 'components/Loader/Loader';

export const App = () => {
  const [input, setInput] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (!page) {
      return;
    }

    const fetchImages = async () => {
      try {
        const response = await pixabay(input, page);
        setImages(prevImages => [...prevImages, ...response.hits]);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [input, page]);

  const handleFormSubmit = inputValue => {
    setInput(inputValue);
    setPage(1);
    setLoading(true);
    setImages([]);
  };

  const handleLoad = () => {
    setLoading(true);
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="Container">
      <Searchbar onSubmit={handleFormSubmit} />
      {loading && <Loader />}
      <ImageGallery items={images} inputValue={input} />
      {images.length > 0 && <Button onLoad={handleLoad} />}
      <ToastContainer />
    </div>
  );
};
