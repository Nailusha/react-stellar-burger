import { Navigate, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { setAuthChecked } from "../../services/store/reducers/userAuthSlice";
import { checkUserAuth } from "../../utils/api";
import Preloader from "../preloder/preloder";
import { useAppDispatch, useAppSelector } from "../../services/hooks/hooks";

const Protected = ({ onlyUnAuth = false, component }:{ onlyUnAuth: boolean, component: any }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setAuthChecked(false));
    dispatch(checkUserAuth());
  }, [dispatch]);

  const isAuthChecked = useAppSelector((store: any) => store.userStatus.isAuthChecked) as boolean;
  const user = useAppSelector((store: any) => store.userStatus.user) as string;
  const location = useLocation();

  if (!isAuthChecked) {
    // Запрос еще выполняется
    return <Preloader/>; // или прелоадер
  }

  if (onlyUnAuth && user) {
    // Пользователь авторизован, но запрос предназначен только для неавторизованных пользователей
    // Нужно сделать редирект на главную страницу или на тот адрес, что записан в location.state.from
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    // Сервер не ответил
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // !onlyUnAuth && user
  return component;
};

export const OnlyAuth = (props: any) => <Protected onlyUnAuth={false} {...props} />;
export const OnlyUnAuth = (props: any) => <Protected onlyUnAuth={true} {...props} />;
