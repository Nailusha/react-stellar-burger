import React from 'react';
import styles from './header-list.module.css';

import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';


function HeaderList({setClickOrderList, setIsOpen }) {

    const onClick = () => {
        setIsOpen(true)
        setClickOrderList(true)
      }

    return (

        <nav className={styles.header_menu}>
            <ul className={styles.linkList}>
                <li className={styles.linkList_item}>
                    <ul className={styles.linkList_childItem}>
                        <li className={styles.linkList_item}>
                            <a className={styles.header_link}>
                            <BurgerIcon type="primary" />
                            <p>Конструктор</p>
                            </a>
                        </li>

                        <li className={styles.linkList_item}>
                            <a className={styles.header_link}>
                            <ListIcon type="primary" />
                            <span className="pl-2 text_type_main-default" onClick={onClick}>Лента заказов</span>
                            </a>
                        </li>

                        <li className={styles.linkList_item}>
                        <a><Logo /></a>
                        </li>

                        <li className={styles.linkList_item}>
                            <a className={styles.header_link}>
                            <ProfileIcon type="primary" />
                            <p className="pl-2 text_type_main-default">Личный кабинет</p>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    
    )
};

export default HeaderList