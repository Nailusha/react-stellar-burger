import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { createAsyncThunk } from "@reduxjs/toolkit";

import Modal from "../modal/modal";
import OrderDetails from "../modal/order-details/order-details";
import Preloader from "../preloder/preloder";

import Layout from "../pages/layout/layout";
import HomePage from "../pages/home";
import PasswordPage from "../pages/forgotPassword";
import OrdersPage from "../pages/orders/orders";
import ResetPassword from "../pages/reset-password/reset-password";
import Profile from "../pages/profile/profile";
import IngredientsDetails from "../pages/ingredients-details/ingredients-details";
import NotFound from "../pages/not-found/not-found";

import { fetchIngredients } from "../../services/store/reducers/ingredientQuery";
import { ingredientSelector } from "../../services/store/selector/ingredientSelector";
import { store } from "../../services/store/store";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import { Register } from "../pages/register/register";
import { Login } from "../pages/login/login";
import { UserForm } from "../pages/user-form/user-form";
import { memoIngredientsSelector } from "../../services/store/selector/memoIngredientSelector";
import { checkUserAuth, getUser } from "../../utils/api";

const App = () => {
  const [isloding, setIsLoding] = useState(false);
  const ingredients = useSelector(ingredientSelector);
  const { setClickOrderList, setIsOpen } = useSelector(
    (state) => state.modalOverlay
  );
  const isClickStutusIngredient = useSelector(
    (state) => state.ingredDetails.clickStutus
  );
  const isClickStutusDetails = useSelector(
    (state) => state.orderDetails.clickStutus
  );

  const location = useLocation();
  const background = location.state && location.state.background;

  const dispatch = useDispatch();

  const childForModal = () => {
    return <Modal>{isClickStutusDetails && <OrderDetails />}</Modal>;
  };

  useEffect(() => {
    dispatch(fetchIngredients());
    dispatch(checkUserAuth());
    dispatch(getUser());
  }, [dispatch]);

  if (ingredients.length < 1) return null;

  if (isloding) {
    return <Preloader />;
  }

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<OnlyUnAuth component={<Login />} />} />
          <Route
            path="/register"
            element={<OnlyUnAuth component={<Register />} />}
          />
          <Route
            path="/forgot-password"
            element={<OnlyUnAuth component={<PasswordPage />} />}
          />
          <Route
            path="/reset-password"
            element={<OnlyUnAuth component={<ResetPassword />} />}
          />
          <Route path="/profile" element={<OnlyAuth component={<Profile />} />}>
            <Route index element={<UserForm />} />
            <Route path={"/profile/orders"} element={<OrdersPage />} />
          </Route>
          <Route
            path={"profile/orders/:id"}
            element={<IngredientsDetails />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route
            path="profile/orders/:id"
            element={
              <Modal>
                {" "}
                <IngredientsDetails isSinglePage={false} />
              </Modal>
            }
          />
        </Routes>
      )}
      {isClickStutusDetails && childForModal()}
    </>
  );
};

export default App;
