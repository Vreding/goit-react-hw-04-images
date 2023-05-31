// import React, { Component } from 'react';
// import s from './Modal.module.css';

// class Modal extends Component {
//   componentDidMount() {
//     document.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     document.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = event => {
//     if (event.keyCode === 27) {
//       this.props.onClose();
//     }
//   };

//   handleOverlayClick = event => {
//     if (event.target === event.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const { imageUrl } = this.props;

//     return (
//       <>
//         <div className={s.Overlay} onClick={this.handleOverlayClick}>
//           <div className={s.Modal}>
//             <img src={imageUrl} alt="" />
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default Modal;

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
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

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
