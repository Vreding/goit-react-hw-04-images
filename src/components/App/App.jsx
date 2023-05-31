import React, { useState, useEffect } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { getImages } from 'api';

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageURL, setModalImageURL] = useState('');

  useEffect(() => {
    const fetchImages = () => {
      setLoading(true);

      getImages(searchTerm, page)
        .then(data => {
          setImages(prevImages => [...prevImages, ...data.hits]);
          setShowLoadMore(page < Math.ceil(data.totalHits / 12));
        })
        .catch(error => console.log(error))
        .finally(() => {
          setLoading(false);
        });
    };

    if (searchTerm === '') {
      return;
    }

    fetchImages();
  }, [searchTerm, page]);

  const incrementPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const onChangeQuery = newSearchTerm => {
    if (newSearchTerm === searchTerm) {
      return;
    }

    setSearchTerm(newSearchTerm);
    setPage(1);
    setImages([]);
  };

  const onImageClick = modalImageURL => {
    setModalImageURL(modalImageURL);
    setIsModalOpen(true);
  };

  const toggleModal = () => {
    setIsModalOpen(prevIsModalOpen => !prevIsModalOpen);
  };

  return (
    <>
      <Searchbar onSubmit={onChangeQuery} />
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={onImageClick} />
      )}
      {loading && <Loader />}
      {showLoadMore && <Button incrementPage={incrementPage} />}
      {isModalOpen && (
        <Modal
          imageUrl={modalImageURL}
          isModalOpen={isModalOpen}
          onClose={toggleModal}
        />
      )}
    </>
  );
};

export default App;
