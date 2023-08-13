import React from "react";
import styles from "./header-list.module.css";

import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, NavLink } from "react-router-dom";

function HeaderList() {
  const styleLink = (isActive) =>
    `${styles.link}${(isActive && ` ${styles.link_active}`) || ""}`;

  return (
    <nav className={styles.header_menu}>
      <ul className={styles.linkList}>
        <li className={styles.linkList_item}>
          <ul className={styles.linkList_childItem}>
            <li className={styles.linkList_item}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  styleLink(isActive) + " pl-2 text_type_main-default"
                }
              >
                <BurgerIcon />
                <span className="pl-2">Конструктор</span>
              </NavLink>
            </li>

            <li className={styles.linkList_item}>
              <NavLink
                className={({ isActive }) =>
                  styleLink(isActive) + " pl-2 text_type_main-default"
                }
              >
                <ListIcon />
                <span className="pl-2">Лента Заказов</span>
              </NavLink>
            </li>
          </ul>
        </li>
        <li className={styles.linkList_item}>
          <a>
            <Logo />
          </a>
        </li>

        <li className={styles.linkList_item}>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              styleLink(isActive) + " pl-2 text_type_main-default"
            }
          >
            <ProfileIcon type="primary" />
            <span className="pl-2">Личный кабинет</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderList;
