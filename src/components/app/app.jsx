import styles from "./app.module.css";
import { useState } from "react";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ingridientPropType } from '../../utils/prop-types.js';

import AppHeader from "../header/AppHeader/AppHeader";
import { data } from "../../utils/data.js";
import BurgerIngridient from "../main/BurgerIngredients/BurgerIngridient/BurgerIngridient";

function App() {

  const [isModalOpen, setIsOpen] = useState(false);
  const [dataIngridients, setData] = useState([]);
  const [imageIngridient, setImageIngridient] = useState(null);
  const [isOpenOrderDetails, setOpenOrderDetails] = useState(false);
  const [isClickOrderList, setClickOrderList] = useState(false);
  const [isClickIngridient, setClickIngridient] = useState(false);
  
  const onClick = () => {
    setIsOpen(true)
  }

  const childForModal = () => {
    return (
      <Modal onClick={onClick} setIsOpen={setIsOpen}>
        {isClickOrderList && <OrderDetails/> || isClickIngridient && <Ingridient imageIngridient={imageIngridient}/>}
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
      <AppMain setClickIngridient={setClickIngridient} setIsOpen={setIsOpen} setImageIngridient={setImageIngridient} ingridients={dataIngridients} />

      {isModalOpen && (
      <> 
      {childForModal()}
      <Overlay setClickOrderList={setClickOrderList} setIsOpen={setIsOpen} /> 
      </>
        
      )}
    </>
  ); 
}

AppMain.propTypes = {
  ingridients: PropTypes.arrayOf(ingridientPropType)

}

export default App;
