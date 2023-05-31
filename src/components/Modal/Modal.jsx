import React, { useEffect, useCallback } from 'react';
import s from './Modal.module.css';

const Modal = ({ imageUrl, onClose }) => {
  const handleKeyDown = useCallback(
    event => {
      if (event.keyCode === 27) {
        onClose();
      }
    },
    [onClose]
  );

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, onClose]);

  return (
    <>
      <div className={s.Overlay} onClick={handleOverlayClick}>
        <div className={s.Modal}>
          <img src={imageUrl} alt="" />
        </div>
      </div>
    </>
  );
};

export default Modal;
