import { useState, useEffect } from "react";

import AppHeader from "../header/app-header/app-header";
import AppMain from "../main/app-main/app-main";
import Modal from "../modal/modal";
import OrderDetails from "../modal/order-details/order-details";
import IngredientDetails from "../modal/ingredient-details/ingredient-details";

import Preloader from "../preloder/preloder";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../services/store/reducers/ingredientQuery";
import { ingredientSelector } from "../services/store/selector/ingredientSelector";

const App = () => {
  const [isLoading, setIsLoading] = useState(false); // Renamed to isLoading
  const ingredients = useSelector(ingredientSelector);
  const { setClickOrderList, setIsOpen } = useSelector(
    (state) => state.modalOverlay
  ); // Destructure properly

  const isClickStatusIngredient = useSelector(
    (state) => state.ingredDetails.clickStutus
  );
  const isClickStatusDetails = useSelector(
    (state) => state.orderDetails.clickStutus
  );

  const dispatch = useDispatch();

  const childForModal = () => {
    return (
      <Modal>
        {isClickStatusDetails && <OrderDetails />}
        {isClickStatusIngredient && <IngredientDetails />}
      </Modal>
    );
  };

  useEffect(() => {
    dispatch(fetchIngredients());
  }, []);

  if (ingredients.length < 1) return null;

  if (isLoading) {
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
