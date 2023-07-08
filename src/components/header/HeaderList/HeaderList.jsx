import React from 'react';
import styles from './HeaderList.module.css';

import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function HeaderList() {

    return (

        <nav className={styles.header_menu}>
            <ul className={styles.linkList}>
                <li className={styles.linkList_item}>
                    <a className={styles.header_link}>
                    <BurgerIcon type="primary" />
                    <p>Конструктор</p>
                    </a>
                </li>

                <li className={styles.linkList_item}>
                    <a className={styles.header_link}>
                    <ListIcon type="primary" />
                    <p>Лента заказов</p>
                    </a>
                </li>

                <li className={styles.linkList_item}>
                <a><Logo /></a>
                </li>

                <li className={styles.linkList_item}>
                    <a className={styles.header_link}>
                    <ProfileIcon type="primary" />
                    <p>Личный кабинет</p>
                    </a>
                </li>
            </ul>
        </nav>
    
    )
};

export default HeaderList