import Modal from "../modal/modal";
import OrderDetails from "../modal/order-details/order-details";
import Preloader from "../preloder/preloder";
import Layout from "../../pages/layout/layout";
import ResetPassword from "../../pages/reset-password/reset-password";
import Profile from "../../pages/profile/profile";
import OrdersPage from "../../pages/orders/orders";
import IngredientsDetails from "../../pages/ingredients-details/ingredients-details";
import NotFound from "../../pages/not-found/not-found";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import AppMain from "../main/app-main/app-main";

import { useState, useEffect } from "react";
import { fetchIngredients } from "../../services/store/reducers/ingredientQuery";
import { ingredientSelector } from "../../services/store/selector/ingredientSelector";
import { Route, Routes, useLocation } from "react-router-dom";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import { checkUserAuth, getUser } from "../../utils/api";
import { useAppDispatch, useAppSelector } from "../../services/hooks/hooks";
import { Login } from "../../pages/login/login";
import { Register } from "../../pages/register/register";
import { UserForm } from "../../pages/user-form/user-form";

const App = () => {
  const [isloding, setIsLoding] = useState(false);
  const ingredients = useAppSelector(ingredientSelector);

  const isClickStutusDetails = useAppSelector(
    (state: any) => state.orderDetails.clickStutus
  ) as boolean;

  const location = useLocation();
  const background = location.state && location.state.background;

  const dispatch = useAppDispatch();

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
          <Route path="/" element={<AppMain />} />
          <Route path="/login" element={<OnlyUnAuth component={<Login />} />} />
          <Route
            path="/register"
            element={<OnlyUnAuth component={<Register />} />}
          />
          <Route
            path="/forgot-password"
            element={<OnlyUnAuth component={<ForgotPassword/>} />}
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
