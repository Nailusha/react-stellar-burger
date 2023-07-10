import styles from "./app.module.css";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { ingridientPropType } from '../utils/prop-types.js';

import AppHeader from "../header/app-header/app-header";
import AppMain from "../main/app-main/app-main";
import Modal from "../modal/modal";
import Details from "../modal/order-details/order-details";
import ModalOverlay from '../modal-overlay/modal-overlay';
import Ingridient from "../modal/ingridient-details/ingridient-details";

function App() {

  const [isModalOpen, setIsOpen] = useState(false);
  const [dataIngridients, setData] = useState([]);
  const [imageIngridient, setImageIngridient] = useState(null);
  const [isClickOrderList, setClickOrderList] = useState(false);
  const [isClickIngridient, setClickIngridient] = useState(false);
  
  const onClick = () => {
    setIsOpen(true)
  }

  const childForModal = () => {
    return (
      <Modal onClick={onClick} setIsOpen={setIsOpen}>
        {isClickOrderList && <Details /> || isClickIngridient && <Ingridient imageIngridient={imageIngridient}/>}
      </Modal>     
    )
  }

  const getData = () => {
    return (
      fetch("https://norma.nomoreparties.space/api/ingredients")
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((res) => {
        setData(res.data)
      })
    )
  }

    useEffect(() => {
      
      getData()
    
    }, [])

  if (dataIngridients.length < 1) return null
  
  return (
    <>
      <AppHeader setClickOrderList={setClickOrderList} setIsOpen={setIsOpen} />
      <AppMain setClickIngridient={setClickIngridient} setIsOpen={setIsOpen} 
      setImageIngridient={setImageIngridient} ingridients={dataIngridients} />

      {isModalOpen && (
      <> 
      {childForModal()}
      <ModalOverlay setClickOrderList={setClickOrderList} setIsOpen={setIsOpen} /> 
      </>
        
      )}
    </>
  ); 
}

AppMain.propTypes = {
  ingridients: PropTypes.arrayOf(ingridientPropType)

}

export default App;
