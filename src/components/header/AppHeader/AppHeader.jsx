import React from 'react';
import styles from './AppHeader.module.css';

import { HeaderList } from '../HeaderList/HeaderList';

function AppHeader() {

    return (
        <header className={styles.header}>
            <HeaderList />
        </header>
    )
}

export default AppHeader