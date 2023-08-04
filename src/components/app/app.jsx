import styles from "./app.module.css";
import React, { useEffect } from "react";
import { useState } from "react";

import AppHeader from "../header/app-header/app-header";
import AppMain from "../main/app-main/app-main";
import Modal from "../modal/modal";
import OrderDetails from "../modal/order-details/order-details";
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

export default App;



