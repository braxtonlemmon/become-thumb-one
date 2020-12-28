import React, { useState } from 'react';
import Modal from 'react-modal';

function ThumbModal({ children, handleClose, isOpen }) {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={{
        overlay: {
          background: 'rgba(0,0,0,0.25)',
          position: 'fixed',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: '500'
        },
        content: {
          position: 'absolute',
          top: '100px',
          bottom: '50%',
          display: 'block',
          padding: '2em',
          width: '79%',
          maxWidth: '700px',
          height: '80%',
          maxHeight: '600px',
          background: `#faf6f1`,
          outline: 'none',
          border: 'none',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#EAF6FF',
          margin: '0 auto',
          boxShadow: '0 0 9px rgba(0,0,0,0.3)',
          zIndex: '999'

        }
      }}
    >
      {children}
    </Modal>
  )
}

export default ThumbModal;