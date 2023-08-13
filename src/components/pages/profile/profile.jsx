import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom"
import styles from "./profile.module.css";
import { Button, EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";

import orders from "../orders/orders";
import MenuPage from "../menu/menu";
import OrdersHistory from "../orders-history/orders-history";
import { UserForm } from "../user-form/user-form";
import AppHeader from "../../header/app-header/app-header";

export default function Profile() {
  const onSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <>
    <main className={styles.page}>
      <MenuPage/>
        <Outlet/>
      </main>
    </>
  );
}