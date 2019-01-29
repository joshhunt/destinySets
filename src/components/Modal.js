import React from 'react';
import Modal from 'react-modal';

const MODAL_STYLES = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    marginTop: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999999999
  },
  content: {
    position: 'static',
    background: 'none',
    border: 'none',
    maxHeight: '100vh'
  }
};

export default function DSModal({ children, ...props }) {
  return (
    <Modal contentLabel="Modal" style={MODAL_STYLES} {...props}>
      {children}
    </Modal>
  );
}
