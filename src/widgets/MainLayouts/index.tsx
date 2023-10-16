import { Outlet } from 'react-router-dom';
import Menu from '../Menu';
import styles from './index.module.scss';
import { FC } from 'react';

const MainLayouts: FC = () => {
    return (
        <div>
            <Menu className={styles.Menu} />
            <Outlet />
        </div>
    );
};

export default MainLayouts;
