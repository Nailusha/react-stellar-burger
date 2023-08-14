import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom"
import styles from "./profile.module.css";
import { Button, EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";

import MenuPage from "../menu/menu";

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