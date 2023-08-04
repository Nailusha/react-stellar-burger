import styles from "./app.module.css";
import React, { useEffect } from "react";
import { useState } from "react";

import AppHeader from "../header/app-header/app-header";
import AppMain from "../main/app-main/app-main";
import Modal from "../modal/modal";
import OrderDetails from "../modal/order-details/order-details";
import ModalOverlay from "../modal-overlay/modal-overlay";
import IngridientDetails from "../modal/ingridient-details/ingridient-details";

import Preloader from "../preloder/preloder";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngridients } from "../../services/store/reducers/ingridientQuery";
import { ingridientSelector } from "../../services/store/selectors/ingridientSelector";


const App = () => {
  const [isloding, setIsLoding] = useState(false);
  const ingridients = useSelector(ingridientSelector);
  const { setClickOrderList, setIsOpen } = useSelector(
    (state) => state.ModalOverlay
  );
  const isClickStutusIngridient = useSelector(
    (state) => state.ingridDetails.clickStutus
  );
  const isClickStutusDetails = useSelector(
    (state) => state.orderDetails.clickStutus
  );

  const dispatch = useDispatch();

  const childForModal = () => {
    return (
      <Modal>
        {(isClickStutusDetails && <OrderDetails />) ||
          (isClickStutusIngridient && <IngridientDetails />)}
      </Modal>
    );
  };

  useEffect(() => {
    dispatch(fetchIngridients());
  }, []);

  if (ingridients.length < 1) return null;

  if (isloding) {
    return <Preloader />;
  }

  return (
    <>
      <AppHeader />
      <AppMain />
      {setIsOpen && childForModal()}
    </>
  );
};



/*function App() {
  const [isModalOpen, setIsOpen] = useState(false);
  const [dataIngridients, setData] = useState([]);
  const [imageIngridient, setImageIngridient] = useState(null);
  const [isClickOrderList, setClickOrderList] = useState(false);
  const [isClickIngridient, setClickIngridient] = useState(false);

  const onClick = () => {
    setIsOpen(true);
  };

  const childForModal = () => {
    return (
      <Modal onClick={onClick} setIsOpen={setIsOpen}>
        {(isClickOrderList && <OrderDetails />) ||
          (isClickIngridient && (
            <IngridientDetails imageIngridient={imageIngridient} />
          ))}
      </Modal>
    );
  };

  const getData = () => {
    return fetch("https://norma.nomoreparties.space/api/ingredients")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  if (dataIngridients.length < 1) return null;

  return (
    <>
      <AppHeader setClickOrderList={setClickOrderList} setIsOpen={setIsOpen} />
      <AppMain
        setClickIngridient={setClickIngridient}
        setIsOpen={setIsOpen}
        setImageIngridient={setImageIngridient}
        ingridients={dataIngridients}
      />

      {isModalOpen && (
        <>
          {childForModal()}
          <ModalOverlay
            setClickOrderList={setClickOrderList}
            setIsOpen={setIsOpen}
          />
        </>
      )}
    </>
  );
}

AppMain.propTypes = {
  ingridients: PropTypes.arrayOf(ingridientPropType),
};*/

export default App;



