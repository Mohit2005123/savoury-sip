import React from 'react';
import ReactDOM from 'react-dom';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  backgroundColor: '#f8f9fa',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  height: '90%',
  width: '90%',
  padding: '20px',
  overflow: 'auto', // Allow scrolling if content overflows
  borderRadius: '10px'
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
};

const CLOSE_BUTTON_STYLES = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  backgroundColor: 'transparent',
  color: 'black',
  border: 'none',
  fontSize: '40px',
  cursor: 'pointer',
  zIndex: 1001 // Ensure it is above the modal content
};

export default function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div style={MODAL_STYLES}>
        <button style={CLOSE_BUTTON_STYLES} onClick={onClose}>&times;</button>
        {children}
      </div>
    </>,
    document.getElementById('cart-root')
  );
}
