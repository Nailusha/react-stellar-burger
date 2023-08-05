import React from "react";
import styles from "./modal-overlay.module.css";

function ModalOverlay({ closeModal }) {
  return <div className={styles.overlay} onClick={closeModal}></div>;
}

export default ModalOverlay;
