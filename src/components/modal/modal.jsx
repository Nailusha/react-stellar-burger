import React from 'react';
import styles from './modal.module.css';
import ReactDom  from 'react-dom';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.getElementById('react-modal')

function Modal({ setIsOpen, children }) {
  
  React.useEffect(() => {
    function onEsc(event) {
      if (event.code === 'Escape') {
        setIsOpen(false)
      }
    }
    document.addEventListener('keydown', onEsc);

    return () => document.removeEventListener('keydown', onEsc)
  }, [])
  
  const onClick = () => {
    setIsOpen(false)
  }

  return ReactDom.createPortal(
    (
      <div className={styles.modal}>
        <div className={styles.close_icon}><CloseIcon onClick={onClick}/></div>
        {children}
      </div>
    ), modalRoot
  )
}

export default Modal