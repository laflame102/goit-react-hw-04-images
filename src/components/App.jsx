import { useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { ImageGallery } from './ImageGallery/ImageGallery';

export const App = () => {
  const [input, setInput] = useState('');

  const handleFormSubmit = inputValue => {
    setInput(inputValue);
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery inputValue={input} />
      <ToastContainer />
    </div>
  );
};
