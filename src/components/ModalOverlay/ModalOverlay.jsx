import React from 'react';
import styles from './ModalOverlay.module.css'
import ReactDom, { createPortal } from 'react-dom';

const overlayRoot = document.getElementById('react-modal')

function ModalOverlay({setClickOrderList, setIsOpen}) {

  const onClick = () => {
    setIsOpen(false)
    setClickOrderList(false)
  }

  return ReactDom.createPortal(
    (
      <div className={styles.overlay} onClick={onClick}></div>
    ), overlayRoot
  )
}

export default ModalOverlay